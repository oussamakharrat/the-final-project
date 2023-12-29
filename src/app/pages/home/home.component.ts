import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  products = [
    {
      id: 1,
      title: 'MASERATI',
      price: 90,
      category: 'Men',
      description: "Maserati men's bracelet, JEWELS Collection, ref. JM419ASC01, stainless steel, gray PVC, rose gold PVC, length 21 cm. The piece of jewelry is equipped with a practical clip clasp. Sophisticated geometries characterize its modern design, the absolute protagonist of Maserati jewelry collections. Stylistic research and attention to detail give life to fashionable collections, essential for all fans of the brand.",
      image: 'https://static.galerieslafayette.com/cdn-cgi/image/width=360,height=393,quality=85,format=auto,fit=crop,gravity=auto/media/3004212/300421246145/G_300421246145_52_VPP_1.jpg',
    },
    {
      id: 2,
      title: 'BOSS',
      price: 120,
      category: 'Men',
      description: "bracelet-metal links essentails- in silver steel with a metal clasp. Length 20cm, adjustable size.",
      image: 'https://static.galerieslafayette.com/cdn-cgi/image/width=360,height=393,quality=85,format=auto,fit=crop,gravity=auto/media/3004168/300416842818/G_300416842818_475_VPP_1.jpg',
    },
    {
      id: 3,
      title: 'TOMMY HILFIGER',
      price: 82,
      category: 'Men',
      description: "Bracelet-Tommy Hifiger- double wrap in black woven leather with magnetic clasp. Length 17.5cm.",
      image: "https://static.galerieslafayette.com/cdn-cgi/image/width=360,height=393,quality=85,format=auto,fit=crop,gravity=auto/media/3004168/300416842828/G_300416842828_101_VPP_1.jpg",
    },
    {
      id: 4,
      title: 'WOMEN BRACELET DANIEL KLEIN DKJ.2.2077-4',
      price: 77,
      category: 'Women',
      description: 'Bracelet-DANIEL KLEIN DKJ.2.2077-4 double wrap in black woven leather with magnetic clasp. Length 17.5cm.',
      image: "https://www.danielklein.tn/5480-home_default/women-bracelet-daniel-klein-dkj-2-2077-4.jpg",
    },
    {
      id: 5,
      title: 'WOMEN BRACELET SB POLO SBJ.7.1066-2',
      price: 125,
      category: 'Women',
      description: 'Bracelet with best price in tunisia with high quality.',
      image: "https://www.polosantabarbara.tn/2491-large_default/women-bracelet-sb-polo-sbj-7-1066-2.jpg",
    },
    {
      id: 6,
      title: 'WOMEN BRACELET FREELOOK FRJ.3.3004-3',
      price: 95,
      category: 'Women',
      description: 'WOMEN BRACELET FREELOOK FRJ.3.3004-3 . best price in tunisia with higher quality .',
      image: "https://www.freelook.tn/4929-large_default/women-bracelet-freelook-frj-3-3004-3.jpg",
    },
    {
      id: 7,
      title: "Timberland Men's Genuine Leather Rfid Blocking Passcase Security Wallet",
      price: 32,
      category: 'Men',
      description: "Timberland Men's Genuine Leather Rfid Blocking Passcase Security Wallet made in india with high qualoty and better price for elegant men",
      image: "https://m.media-amazon.com/images/I/71Jk5UPRaJL._AC_UL320_.jpg",
    },
    {
      id: 8,
      title: 'Derrick Leather RFID Bifold with Flip ID Wallet',
      price: 135,
      category: 'Men',
      description: "This leather bifold with flip id features RFID lining, 1 bill compartment, 2 id windows, 2 slide pockets, 8 credit card slots.",
      image: 'https://fossil.scene7.com/is/image/FossilPartners/ML3681001_main?$sfcc_fos_large$',
    },
    {
      id: 9,
      title: 'Steven Leather Card Case Wallet',
      price: 70,
      category: 'Men',
      description: "This leather card case features 1 slide pocket and 4 credit card slots.",
      image: "https://fossil.scene7.com/is/image/FossilPartners/ML4395019-alt?$sfcc_fos_medium$",
    },
    {
      id: 10,
      title: 'MICHAEL MICHAEL KORS',
      price: 187,
      category: 'Women',
      description: "Embrace the epitome of modern sophistication with the Michael Michael Kors Chain Tote Bag. Crafted from sumptuous pebbled leather, this tote exudes an aura of opulence and refinement. With its double chain shoulder straps, it effortlessly blends functionality and style, allowing for comfortable and elegant wear.",
      image: "https://www.houseoffraser.co.uk/images/products/70275603_h.jpg",
    },
    {
      id: 11,
      title: 'Guess Vikky Qlt Tot Ld24',
      price: 95,
      category: 'Women',
      description: "This Guess Vikky Qlt Tot Ld24 is the perfect addition to any bag collection and a modern reinterpretation of an archival 1970s coach design which delivers a sophisticated and versatile look that will enhance any outfit. The bag is crafted with polished pebble leather, whilst the two detachable straps allow you to carry the bag as a short shoulder bag or wear as a cross body and the iconic metal hardware logo to the front completes the look. Invest in this stunning piece, perfect for everyday wear.",
      image: "https://www.houseoffraser.co.uk/images/products/72962703_l.jpg",
    },
    {
      id: 12,
      title: 'Biba Multi Compartment Crossbody Bag',
      price: 50,
      category: 'Women',
      description: "Elevate your style with the Biba Multi Compartment Crossbody Bag—a fusion of timeless elegance and modern practicality. Crafted with meticulous attention to detail, this crossbody bag features a luxurious quilted pattern, multiple compartments, and a chic chain strap that adds a touch of sophistication to your ensemble.",
      image: "https://www.houseoffraser.co.uk/images/products/72443815_l.jpg",
    },
    {
      id: 13,
      title: "Gc IronClass Watch Z32003G7MF",
      price: 210,
      category: 'Men',
      description: "Sport watch, connected with elegance, featuring deep blue, silicone strap, accompanying by silver case, with rose gold details. Matching deep blue dial, with day/date functions, all under sapphire coated mineral glass.",
      image: "https://d1rkccsb0jf1bk.cloudfront.net/products/100053291/main/medium/Z32003G7MF.jpg",
    },
    
  ];
  sort='desc';
  count = '12';
  productsSubscription: Subscription | undefined;
  dataSource: any;
  category: string | undefined;

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onItemsCountChange(count: number): void {
    this.count = count.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
