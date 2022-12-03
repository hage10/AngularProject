import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import {ConfirmationService, MessageService, TreeNode } from 'primeng/api';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
providers: [ConfirmationService]

})
export class ManageComponent implements OnInit {
  msgs: Message[] = [];

  // position: string | undefined;

  constructor(private confirmationService: ConfirmationService) { }

  items: MenuItem[] = [];
  products: any[]= [];

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home'},
          {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
          {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
          {label: 'Documentation', icon: 'pi pi-fw pi-file'},
          {label: 'Settings', icon: 'pi pi-fw pi-cog'}
      ];
      this.getListPosts()
  }
  getListPosts(){
    fetch("http://localhost:3000/posts",{
      method: 'GET'
  })
    .then((res)=>{
      res.json().then(res1=>{
        console.log(res1);
        this.products = res1;
      });
    }).then(res=>{
    })
  }
  updateOnClick(data: any){
    alert(data)
    this.confirmationService.confirm({
      key: 'confirm',
      header: "Xác nhận",
      message: `Bạn có thực sự muốn xóa Danh mục ${data} và toàn bộ các danh mục con`,
      acceptLabel: "Xóa",
      rejectLabel: "Hủy",
      accept: () => {

    },
    reject: () => {

    }})}

  deleteOnClick(product: any){{
    alert(product)
  }}
}
