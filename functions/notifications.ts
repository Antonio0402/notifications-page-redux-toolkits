import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const data = {
  "notifications": [
    {
      "id": 1,
      "author": {
        "name": "Mark Webber",
        "img": "avatar-mark-webber",
        "href": "#"
      },
      "action": "reacted to your recent post",
      "link": {
        "text": "My first tournament today!",
        "href": "#"
      },
      "time": "1m ago",
      "isUnread": true
    },
    {
      "id": 2,
      "author": {
        "name": "Angela Gray",
        "img": "avatar-angela-gray",
        "href": "#"
      },
      "action": "followed you",
      "time": "5m ago",
      "isUnread": true
    },
    {
      "id": 3,
      "author": {
        "name": "Jacob Thompson",
        "img": "avatar-jacob-thompson",
        "href": "#"
      },
      "action": "has joined your group",
      "link": {
        "text": "Chess Club",
        "href": "#"
      },
      "time": "1 day ago",
      "isUnread": true
    },
    {
      "id": 4,
      "author": {
        "name": "Rizky Hasanuddin",
        "img": "avatar-rizky-hasanuddin",
        "href": "#"
      },
      "action": "sent you a private message",
      "time": "5 days ago",
      "isUnread": true,
      "privateMessage": "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },
    {
      "id": 5,
      "author": {
        "name": "Kimberly Smith",
        "img": "avatar-kimberly-smith",
        "href": "#"
      },
      "action": "commented on your picture",
      "picture": {
        "img": "image-chess",
        "href": "#"
      },
      "time": "1 week ago",
      "isUnread": false
    },
    {
      "id": 6,
      "author": {
        "name": "Nathan Peterson",
        "img": "avatar-nathan-peterson",
        "href": "#"
      },
      "action": "reacted to your recent post",
      "link": {
        "text": "end-game strategies to increase your win rate",
        "href": "#"
      },
      "time": "2 weeks ago",
      "isUnread": false
    },
    {
      "id": 7,
      "author": {
        "name": "Anna Kim",
        "img": "avatar-anna-kim",
        "href": "#"
      },
      "action": "left the group",
      "link": {
        "text": "Chess Club",
        "href": "#"
      },
      "time": "2 weeks ago",
      "isUnread": false
    }
  ]
}

const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {

//   if (event.httpMethod === "PATCH") {
//     if (event.body) {
//       const params = JSON.parse(event.body);
//       for (const noti of data.notifications) {
//         if (noti.id === Number(params?.id)) {
//           noti.isUnread = !noti.isUnread;
//           break;
//         }
//       }
//       return {
//         statusCode: 202,
//         body: JSON.stringify(data)
//       }
//     }
//   };

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

export { handler };
