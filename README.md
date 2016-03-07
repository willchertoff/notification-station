# Notification Station

Simple js 'app-like' notifications. 

# Setup 

1. add ```NotificationStation.js``` to your project

### Initialization
The concept is quite simple. You first need to configure your ```Station```, which will display your ```AppNotification.notification```. Currently, all settings listed below are REQUIRED. 

```javascript
grandCentralSettings = {
  stationElement: 'outerContainer', // id of notification container
  notificationElement: 'message', //id of notification 
  displayTime: 3 // duration notification will be displayed in seconds
}
var grandCentral = new NS.Station(grandCentralSettings);
```

| Station Settings        | type           | purpose  |
| ------------- |-------------| -----|
| stationElement     | string | id of your notification container |
| notificationElement      | string      |   id of your notification element |
| displayTime | int      | duration notification is shown (s) |

The next step is to configure your ```AppNotification```.Currently, all settings listed below are REQUIRED. 
```javascript
errorMessageOptions = {
  station: grandCentral, // MUST BE the object of the your desired station
  showAnimation: 'slideInDown', // Entrance class, can be anything you'd like
  hideAnimation: 'slideOutLeft', // Exit class, can be anything you'd like
  notificationClass: 'danger' // Class applied to this notification type
}
var errorMessage = new NS.AppNotification(errorMessageOptions); // Create new notification type, errorMessage
```
| AppNotification Settings        | type           | purpose  |
| ------------- |-------------| -----|
| station     | object | your station object note is going to |
| showAnimation      | string      |   class to be applied when notification is triggered |
| hideAnimation | string      | class to be applied when notification is removed |
| notificationClass | string      | class to be applied throughout the notification process |

### Front-End Set-up Example



##### HTML
```html
  <div id="outerContainer" class="animated">
    <div id="message" class="message">
    </div>
  </div>
```
##### CSS
```css
#outerContainer {
  position: absolute;
  top: 0;
  height: 50px;
  width: 100%;
  visibility: hidden;
  display: flex;
  background-color: grey;
  align-items: center;
  justify-content: center;
  color: white;
}

.success {
  background-color: #2EC4B6 !important;
}

.danger {
  background-color: #ff1053 !important;
}


.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@keyframes slideInDown {
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInDown {
  animation-name: slideInDown;
}



@keyframes slideOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
}

.slideOutLeft {
  animation-name: slideOutLeft;
}
```

### Display
Displaying our ```errorMessage``` is easy. All we have to do is set the notification property to a string.
```javascript
// Time for an error
errorMessage.notification = 'Apparently, you are not allowed to do that';
```

THATS IT!



