import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector : 'app-card-component',
    templateUrl: './card-component.component.html',
    styleUrls: ['./card-component.component.css']
})

export class CardComponentComponent implements OnInit{
    @Input('title') title;
    @Input('price') price;
    @Input('var') var;
    data:any;
        dataList = [
            {
                name: "FREE",
                price: 0,
                count: "Single User",
                size : "5GB Storage",
                true : [
                    "unlimited public projects",
                    "community access"
                ],
                false: [
                    "Unlimited Private Projects",
                    "Dedicated Phone Support",
                    "Free Subdomain",
                    "Monthly Status Reports"
                ]  
            },
            {
                name : "PLUS",
                price: 9,
                count: "5 Users",
                size : "50GB Storage",
                true:[
                    "Unlimited Public Projects",
                    "Community Access",
                    "Unlimited Private Projects",
                    "Dedicated Phone Support",
                    "Free Subdomain"
                ],
                false:[
                    "Monthly Status Reports"
            ]
            },
            {
                name: "PRO",
                price: 49,
                count: "Unlimited Users",
                size : "150GB Storage",
                true:[
                  "Unlimited Public Projects",
                  "Community Access",
                  "Community Access",
                  "Dedicated Phone Support",
                  "Unlimited Free Subdomains",
                  "Monthly Status Reports"
                ],
                false:[]
              }

        ];
        constructor() { }
        ngOnInit(): void {
        // this.data = this.dataList[this.var];
        // console.log(this.data);
    }
}
