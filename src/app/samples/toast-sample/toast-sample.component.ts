import { Component, inject } from '@angular/core';
import {  MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-toast-sample',
  standalone: true,
  templateUrl: './toast-sample.component.html',
  styleUrl: './toast-sample.component.scss',
  imports: [
    ToastModule,
    ButtonModule,
    RippleModule],
  providers: [MessageService]
})
export class ToastSampleComponent {

  private messageService: MessageService = inject(MessageService);



  showMessage() {
    const message: any = {
      severity: "success",
      summary: "Success",
      detail: "Message content"
    };
    this.messageService.add(message)
  }

  showMultipleMessage() {
    this.messageService.addAll([
      {
        severity: "success",
        summary: "Success",
        detail: "Message content"
      },
      {
        severity: "secondary",
        summary: "Success",
        detail: "Message content"
      },
      {
        severity: "warning",
        summary: "Success",
        detail: "Message content"
      }
    ])
  }


  clearMessages() {
    this.messageService.clear();
  }

}
