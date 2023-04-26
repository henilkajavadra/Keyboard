import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout3',
  templateUrl: './layout3.component.html',
  styleUrls: ['./layout3.component.scss']
})
export class Layout3Component implements OnInit {
  displayValue: string = '';
  promptValue: string = '587942';
  testStarted: boolean = false;
  startTime: Date | null = null;
  endTime: Date | null = null;
  elapsedTime: number = 0;
  typingErrors: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  handleButtonClick(value: string): void {
    // start the test on the first button click
    if (!this.testStarted) {
      this.testStarted = true;
      // this.startTime = Date.now();
      this.startTime = new Date();
      // this.endTime = new Date();
    }

    // prevent adding more than 6 digits
    if (this.displayValue.length >= 6) {
      return;
    }

    // check if the pressed key digit matches the prompt key digit
    const promptIndex = this.displayValue.length;
    if (value === this.promptValue[promptIndex]) {
      this.displayValue += value;
    } else {
      this.typingErrors++;
    }

    if (value === '.') {
      // prevent adding multiple decimal points
      if (this.displayValue.includes('.')) {
        return;
      }
    }


    // if 6 digits have been entered, end the test
    if (this.displayValue.length === 6) {
      this.testStarted = false;
      this.endTime = new Date();
      if (this.displayValue === this.promptValue) {
        console.log('Test completed successfully');
        console.log('Start time:', this.startTime);
        console.log('End time:', this.endTime);
        this.elapsedTime = (this.endTime.getTime() - this.startTime!.getTime()) / 1000;
        console.log(`Elapsed Time: ${this.elapsedTime} seconds`);
        // alert("Test completed");
        const typingSpeed = (this.displayValue.length * 60000) / this.elapsedTime;
        // console.log('Typing speed:', typingSpeed, 'characters per minute');
        console.log(`Typing Speed: ${this.typingSpeed} CH/Minute`);
        console.log(`Typing Accuracy: ${this.typingAccuracy}%`);
        console.log(`Typing Errors: ${this.typingErrors}`);
        this.generateLogFile();
      }
      else {
        console.log('Test completed with errors');
        console.log('Start time:', this.startTime);
        console.log('End time:', this.endTime);
        this.elapsedTime = (this.endTime.getTime() - this.startTime!.getTime()) / 1000;
        console.log(`Elapsed Time: ${this.elapsedTime} seconds`);
        const typingSpeed = ((this.displayValue.length - this.typingErrors) * 60000) / this.elapsedTime;
        console.log('Typing speed:', typingSpeed, 'CH/Minute');
        console.log('Error count:', this.typingErrors);
      }
      // this.router.navigate(['']);
    }

  }

  clearDisplay(): void {
    this.displayValue = '';
  }

  get typingSpeed(): number {
    return Math.round((this.displayValue.length / this.elapsedTime) * 60);

  }

  get typingAccuracy(): number {
    if (this.displayValue.length === 0) {
      return 0;
    }
    return Math.round(((this.displayValue.length - this.typingErrors) / this.displayValue.length) * 100);

  }

  generateLogFile(): void {
    const logs = [
      `Completion Time: ${this.elapsedTime} seconds`,
      `Typing Accuracy: ${this.typingAccuracy}%`,
      `Typing Errors: ${this.typingErrors}`,
      `Typing Speed: ${this.typingSpeed} CH/Minute`,
      `Start Time: ${this.startTime}`,
      `End Time: ${this.endTime}`
    ];
  
    const fileContent = logs.join('\n');
    const fileBlob = new Blob([fileContent], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(fileBlob);
  
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'Layout-A-Results.txt';
    document.body.appendChild(downloadLink);
    console.log(fileContent); // Log the file content to check if it's generated correctly
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // setTimeout(() => {
    //   downloadLink.click();
    //   document.body.removeChild(downloadLink);
    //   URL.revokeObjectURL(fileUrl);
    // }, 1000);
  
    //optional: revoke the data URL to free memory
    URL.revokeObjectURL(fileUrl);
  }

}
