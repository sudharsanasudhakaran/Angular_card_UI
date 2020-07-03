import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector : 'app-card-component',
    templateUrl: './card-component.component.html',
    styleUrls: ['./card-component.component.css']
})

export class CardComponentComponent implements OnInit{
    @Input('var') var;
    obj:any;
        dataList = [
            {
                name: "FREE",
                price: 0,
                count: "Single User",
                size : "5GB Storage",
                notcrossed : [
                    "unlimited public projects",
                    "community access"
                ],
                crossed: [
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
                notcrossed:[
                    "Unlimited Public Projects",
                    "Community Access",
                    "Unlimited Private Projects",
                    "Dedicated Phone Support",
                    "Free Subdomain"
                ],
                crossed:[
                    "Monthly Status Reports"
            ]
            },
            {
                name: "PRO",
                price: 49,
                count: "Unlimited Users",
                size : "150GB Storage",
                notcrossed:[
                  "Unlimited Public Projects",
                  "Community Access",
                  "Community Access",
                  "Dedicated Phone Support",
                  "Unlimited Free Subdomains",
                  "Monthly Status Reports"
                ],
                crossed:[]
              }

        ];
        constructor() { }
        ngOnInit(): void {
        this.obj = this.dataList[this.var];
        console.log(this.obj);
    }
}
