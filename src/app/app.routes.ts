import { Routes } from '@angular/router';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';

export const routes: Routes = [
    {path : '' , component : PageLayoutComponent ,
        children : [
            { path : 'youtube' , loadChildren : () => import('../app/pages/youtube/youtube.module').then((m) => m.YoutubeModule) },
            { path : 'tweet' , loadChildren : () => import('../app/pages/tweet/tweet.module').then((m) => m.TweetModule)}
        ]
    }
    
];
