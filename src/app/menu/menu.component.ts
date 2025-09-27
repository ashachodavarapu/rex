import { Component } from '@angular/core';

interface Category {
  name: string;
  price: string;
  items: string[];
  image: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [],
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  categories: Category[] = [
    {
      name: 'Sweet Potato Delights',
      price: '₹180',
      items: ['Honey Roasted Sweet Potato', 'Mashed Sweet Potato with Butter', 'Grilled Sweet Potato Wedges', 'Sweet Potato Fries', 'Caramelized Sweet Potato', 'Baked Sweet Potato with Herbs', 'Sweet Potato Halwa', 'Stuffed Sweet Potato', 'Sweet Potato Pancakes', 'Sweet Potato Tikki'],
      image:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/09/27/0/FNK_Air-Fryer-Sweet-Potatoes_H2_s4x3.jpg.rend.hgtvcom.616.462.85.suffix/1664309954439.webp',
    },
    {
      name: 'Corn Varieties',
      price: '₹150',
      items: ['Sweet Corn: Buttered Sweet Corn Kernels', 'Sweet Corn: Grilled Corn on Cob', 'Sweet Corn: Corn Chaat', 'Sweet Corn: Creamy Corn Soup', 'Baby Corn: Honey Glazed Baby Corn', 'Baby Corn: Spicy Baby Corn Masala', 'Baby Corn: Crispy Baby Corn Fritters', 'Baby Corn: Baby Corn Manchurian', 'Baby Corn: Garlic Baby Corn Stir Fry', 'Baby Corn: Baby Corn Tikka'],
      image:
        'https://d1w7312wesee68.cloudfront.net/QI8qpoKjjjmIFw3UYCfskaSN8NIHFyJKK9oGXY0XZNs/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-27783000000000000/menu/items/9/item-500000000686694639_1612845773.jpg',
    },
    {
      name: 'Groundnut Varieties',
      price: '₹120',
      items: ['Roasted Groundnuts', 'Salted Peanuts', 'Spiced Groundnut Mix', 'Boiled Groundnuts', 'Groundnut Chaat', 'Honey Roasted Peanuts', 'Masala Groundnuts', 'Groundnut Laddu', 'Peanut Butter Spread', 'Groundnut Brittle'],
      image:
        'https://www.greendna.in/cdn/shop/files/steamedgroundnut1_1600x.webp?v=1710916181',
    },
    {
      name: 'Healthy Bowls',
      price: '₹220',
      items: ['Chia Pudding Bowl', 'Oats Pudding', 'Fresh Fruit Bowl', 'Smoothie Bowl', 'Mixed Berry Bowl', 'Quinoa Power Bowl', 'Acai Bowl', 'Granola Bowl', 'Yogurt Parfait Bowl', 'Green Smoothie Bowl'],
      image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop',
    },
  ];

  selectedCategory: Category | null = null;

  showItems(category: Category) {
    this.selectedCategory = category;
  }

  closeItems() {
    this.selectedCategory = null;
  }
}
