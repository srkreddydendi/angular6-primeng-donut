import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  
  data: any;
  options: any;

    constructor() {
      this.options = {
            /*title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },*/
          //  legend: {
            //    position: 'bottom'
            //}
        };
        this.data = {
           // labels: ['A','B','C'],
            datasets: [
                {
                    data: [80, 20],
                    backgroundColor: [
                      "#36A2EB",
                        "#d4d2cd",
                        
                      
                    ],
                   
                }]    
            };
    }

}
