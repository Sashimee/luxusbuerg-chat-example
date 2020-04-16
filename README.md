# Setup
## Install IONIC
npm i -g @ionic/cli

## Create a new "Android typed" Project
ionic start myApp sidemenu

## Or Create a new "Iphone typed" Project
ionic start myApp tabs

## Serve the app
ionic serve

# Customization

## Create a new page
ionic generate page rooms
Automatically, the page is created, the routing is adapted and we just need to clean the unused links

## Cleaning ...
App-routing should look like this
{
    path: '',
    redirectTo: 'rooms',
    pathMatch: 'full'
},
{
  path: 'rooms',
  loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsPageModule)
}

room.page.html should look like this :
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Rooms</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <h1>Rooms</h1>
</ion-content>

App.component.ts should look like this
  public appPages = [
    {
      title: 'Rooms',
      url: '/rooms',
      icon: 'paper-plane'
    }
  ];
  public labels = [];


# [Expected at 16h50] Process
0 . Check the API on https://ajax-course.herokuapp.com/messages/1
1 . Create a service for the messages that will do the get request on a specific roomId
2 . Create the component that will show the messages
3 . How can it be acccess ? Routing... Choose a way to access that list of messages.
  Maybe... when i click on a room... I will see that specific room messages..
  in Order to do this I need to create a routerLink that points to the messages/:roomId
  This routin should be also mocified inside the app-routing module
4. In the component, retried the id from the URL because is contains the roomId
5. In the component call the message service with the proviously retrieved roomId
6. The result is an array of messages that need to be shown...
7. in the HTML using *ngFor...

# [At home for tomorrow] Handle the sending of a new message...
Access the hash from the user service... maybe you need to store it (in the service)
Create a form that when submitted, launch a post request to https://ajax-course.herokuapp.com/messages/ + roomId
Refresh the views of the messages (every seconds)