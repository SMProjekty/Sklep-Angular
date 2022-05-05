import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  UserIdList: any = [] //id zalogowanego usera
  ShopList: any = [] //lista list
  ProductList: any = [] // lista produktów

  public addShopForm !: FormGroup;
  public addProductForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,
    private service:SharedService,
    private router: Router,) { }

  ngOnInit(): void {
  this.UserIdList = this.service.getUserId();

  this.showShop();

  this.addShopForm = this.formBuilder.group({
    NameShop:[''],
  })



  }


  //aktualizowanie list oraz produktów
  showShop() {
    this.service.shop(this.UserIdList[0].UserId).subscribe(res => {
      this.ShopList= res;
      for (let i =0; i<this.ShopList.length; i++){
        this.service.product(this.ShopList[i].ShopId).subscribe(res => {
          this.ProductList= res;
          console.log(this.ProductList);
        })
      }
    })
  }

  //wyświetlenie produktów
  showProducts(shop_id:number) {
    this.service.setShopId(shop_id);
    this.router.navigate(['../products'])
  }

  //dodanie listy
  addShop(){
    let x = {
      UserId : this.UserIdList[0].UserId,
      NameShop: this.addShopForm.get('NameShop')?.value,
      }

      this.service.addShopdb(x).subscribe(res=>{
        if (res != 'Failed to Add'){
        this.showShop();
        this.addShopForm.reset()
        }
        })
  }



  //usunięcie listy
  delList(shop_id: any) {
    this.service.delProduct(shop_id).subscribe(res => console.log(res))
    this.service.delShop(shop_id).subscribe(res => this.showShop())
  }

  //usunięcie produktów podczas usuwania listy
  delProd(product_id: any) {
    this.service.delProduct(product_id).subscribe(res => this.showShop())
  }


}


