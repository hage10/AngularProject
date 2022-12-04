import { DialogModule } from 'primeng/dialog';
import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import { ConfirmationService, MessageService, TreeNode } from 'primeng/api';
import { AuthorService } from 'src/app/services/author.service';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],

})
export class ManageComponent implements OnInit {
  msgs: Message[] = [];

  display: boolean = false;
  constructor(private confirmationService: ConfirmationService, private authorService: AuthorService) { }
  displayBasic: boolean = false;
  items: MenuItem[] = [];
  products: any[] = [];
  dialogMode: string = "add"

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];
    this.getListPosts()
  }
  getListPosts() {
    this.authorService.getList().then((res: any) => {
      this.products = res.data;
    })

  }
  deleteOnClick(data: any) {
    this.confirmationService.confirm({
      key: 'confirm',
      header: "Xác nhận",
      message: `Bạn có thực sự muốn xóa Danh mục ${data} và toàn bộ các danh mục con`,
      acceptLabel: "Xóa",
      rejectLabel: "Hủy",
      accept: () => {
        this.authorService.delete(data).then((res: any) => {
          alert("thanh cong:")
          this.getListPosts();
        }).catch((err: any) => {
          alert("that bai")
        })
      }
    });



  }
  updateOnClick(product: any) {
   this.dialogMode = "update";
   this.displayBasic = true;
  }
  addOnClick() {
    this.displayBasic = true;
  }
  closeDialog(){
    this.displayBasic = false;
  }

}
