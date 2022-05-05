import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ShopIdnum: any = [];
  ProductList: any = []

  public addProductForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,
    private service:SharedService,
    private router: Router,) { }

  ngOnInit(): void {
    this.ShopIdnum = this.service.getShopId();

    this.showProduct();

    this.addProductForm = this.formBuilder.group({
      NameProduct:[''],
    })
  }


  showProduct() {

    //this.service.shop(this.UserIdList[0].UserId).subscribe(res => {
      this.service.product(this.ShopIdnum).subscribe(res => {
      this.ProductList= res;
    })

  }

  addProduct(){
    let x = {
      ShopId : this.ShopIdnum,
      NameProduct: this.addProductForm.get('NameProduct')?.value,
      ActivProduct: 'Y',}

      this.service.addProductdb(x).subscribe(res=>{
        if (res != 'Failed to Add'){
        this.showProduct();
        this.addProductForm.reset()
        }
        })
  }

  delProd(product_id: any) {
    this.service.deleteProduct(product_id).subscribe(res => this.showProduct())
  }

}
