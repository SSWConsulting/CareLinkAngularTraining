import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error(error);
    alert(error.toString());
    throw error;
    // 1. log to console.error();
    // 2. use alert('') to tell user there is an error
    // 3. rethrow the error otherwise it got swallow
  }
}
