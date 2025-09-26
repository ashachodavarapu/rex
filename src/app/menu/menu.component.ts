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
      name: 'South Indian Tiffin',
      price: '₹120/day',
      items: ['Idli', 'Dosa', 'Sambar', 'Coconut Chutney', 'Vada'],
      image:
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=250&fit=crop',
    },
    {
      name: 'North Indian Tiffin',
      price: '₹140/day',
      items: ['Dal', 'Sabzi', 'Roti', 'Rice', 'Pickle'],
      image:
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=250&fit=crop',
    },
    {
      name: 'Healthy Bowls',
      price: '₹180/day',
      items: ['Quinoa Bowl', 'Protein Salad', 'Fresh Juice', 'Nuts'],
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop',
    },
    {
      name: 'Snacks & Sweets',
      price: '₹80/day',
      items: ['Samosa', 'Pakora', 'Gulab Jamun', 'Tea'],
      image:
        'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop',
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
