import { inject, Injectable } from '@angular/core';
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebaseConfig';
import { CategoryData } from '../category/category-data';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  toastr = inject(ToastrService)

  addCategory(categoryData: CategoryData){
    this.toastr.success('Added new category')
    addDoc(collection(firestore, 'categories'), categoryData)
  }

  async getCategory(){
    const snapshot = await getDocs(collection(firestore, 'categories'))
    const category = snapshot.docs.map(doc => {
      const data = doc.data()
      return {
        category: data['category']
      }
    })
    return category
  }
}
