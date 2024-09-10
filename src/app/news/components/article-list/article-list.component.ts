import {Component, Input} from '@angular/core';
import {ArticleItemComponent} from "../article-item/article-item.component";
import {Article} from "../../model/article.entity";

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    ArticleItemComponent
  ],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  @Input() articles: Array<Article> = [];
}
