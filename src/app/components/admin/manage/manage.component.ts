import { DialogModule } from 'primeng/dialog';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { ConfirmationService, TreeNode } from 'primeng/api';
import { AuthorService } from 'src/app/services/author.service';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],

})
export class ManageComponent implements OnInit {
  msgs: Message[] = [];
  display: boolean = false;
  constructor(private confirmationService: ConfirmationService, private authorService: AuthorService,private messageService: MessageService) { }
  displayBasic: boolean = false;
  items: MenuItem[] = [];
  posts: any[] = [];
  dialogMode: string = "add";
  dataPost: any;
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
      this.posts = res.data;
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
          this.messageService.add({ key: "toastUserView", severity: 'success', summary: "SUCCESS", detail: "Xóa thành công!" });
          this.getListPosts();
        }).catch((err: any) => {
          this.messageService.add({ key: "toastUserView", severity: 'error', summary: "FAILED", detail: "Xóa thất bại!" });
        })
      }
    });
  }
  updateOnClick(data: any) {
    this.dataPost = { ...data }
    this.dialogMode = "update";
    this.displayBasic = true;

  }
  addOnClick() {
    this.dialogMode = "add";
    this.displayBasic = true;
    this.dataPost = {}
  }
  SubmitOnClick(data: any) {

    if (this.dialogMode == "add") {
      this.authorService.add(data).then((res: any) => {
        this.getListPosts();
        this.messageService.add({ key: "toastUserView", severity: 'success', summary: "SUCCESS", detail: "Thêm thành công!" });
      })
        .catch((err: any) => {
          this.messageService.add({ key: "toastUserView", severity: 'error', summary: "FAILED", detail: "Thêm thất bại!" });
        })
    }
    else {
      this.authorService.update(data.id,data).then((res: any) => {
        this.getListPosts();
        this.messageService.add({ key: "toastUserView", severity: 'success', summary: "SUCCESS", detail: "Cập nhật thành công!" });
      })
        .catch((err: any) => {
          this.messageService.add({ key: "toastUserView", severity: 'error', summary: "FAILED", detail: "Cập nhật thất bại!" });
        })
    }
  }
  closeDialog() {
    this.displayBasic = false;
  }

}
