import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000"

  UserIdList: any = []; //id zalogowanego
  ShopIdnum: any; //id listy


  constructor(private http:HttpClient) { }

  //przekazanie między komponentami
  setUserId(data:any){ this.UserIdList = data}
  getUserId(){return this.UserIdList}

  setShopId(data:number){ this.ShopIdnum = data}
  getShopId(){return this.ShopIdnum}

  //połączenia z bazą
  //users()   { return this.http.get(this.APIUrl + '/user'); }
  register(y: any)      { return this.http.post(this.APIUrl + '/register', y); } //rejestracja
  login(y: any)      { return this.http.post(this.APIUrl + '/login', y); } //logowanie
  shop(id: number)   { return this.http.get(this.APIUrl + '/shop/' + id +'/'); } //wyświetlenie list
  delShop(id: number)   { return this.http.delete(this.APIUrl + '/shop/' + id +'/'); } //usunięcie list
  addShopdb(y: any)      { return this.http.post(this.APIUrl + '/shop', y); } //dodanie listy
  product(id: number)   { return this.http.get(this.APIUrl + '/products/' + id +'/'); } //wyświetlenie produktów
  addProductdb(y: any)      { return this.http.post(this.APIUrl + '/products', y); } //dodanie produktu
  delProduct(id: number)   { return this.http.delete(this.APIUrl + '/products/' + id +'/'); } //usunięcie produktu podczas usuwania listy
  deleteProduct(id: number)   { return this.http.delete(this.APIUrl + '/product/' + id +'/'); } //usunięcie produktu z listy
  //updProduct(id: number)   { return this.http.delete(this.APIUrl + '/product/' + id +'/'); }
}
