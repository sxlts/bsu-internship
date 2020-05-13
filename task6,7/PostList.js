"use strict"

let ListJSON = `[
 {
   "id": 1,
   "description": "Более 76 тыс. человек во всем мире ужревысило 6,4 тыс.",
   "createdAt": "2020-03-17T23:00:00",
   "author": "Иванов Иван",
   "photoLink": "https://www.pressball.by/images/stories/2020/03/20200310231542.jpg",
   "likes": 228,
   "hashtags": ["#null"]
  },
  {
   "id": 100,
   "description": "Более 76 тыс. человек во всем мире ужревысило 6,4 тыс.",
   "createdAt": "2020-03-17T23:00:00",
   "author": "Иванов Иван",
   "photoLink": "https://www.pressball.by/images/stories/2020/03/20200310231542.jpg",
   "likes": 228,
   "hashtags": ["#null"]
  },
  {
   "id": 10,
   "description": "Более 76 тыс. человек во всем мире ужревысило 6,4 тыс.",
   "createdAt": "2020-03-17T23:00:00",
   "author": "Иванов",
   "photoLink": "https://www.pressball.by/images/stories/2020/03/20200310231542.jpg",
   "likes": 228,
   "hashtags": ["#null"]
  },
  {
   "id": 3,
   "description": "Более 76 тыс. человек во всем мире ужревысило 6,4 тыс.",
   "createdAt": "2020-03-17T23:00:00",
   "author": "Иванов Иван",
   "photoLink": "https://www.pressball.by/images/stories/2020/03/20200310231542.jpg",
   "likes": 228,
   "hashtags": ["#null"]
  }
]`;

class PostList{

  static #postKeys = ["id", "description", "createdAt", "author", "photoLink", "likes", "hashtags"];

	constructor(json){
    let rawPost = JSON.parse(json);
    this.Posts = new Array;

    for(let i = 0 ; i < rawPost.length ; i++){
      rawPost[i].createdAt = new Date(rawPost[i].createdAt);

      if(PostList.isPost(rawPost[i]))
        this.Posts.push(rawPost[i]);
    }
  }
  
  addAll(newPosts){
    for(let i = 0 ; i < newPosts.length ; ++i){
      if(PostList.isPost(newPosts[i])) 
        this.Posts.push(newPosts[i]);
    }  
  }

  clear(){
    this.Posts = new Array;
  }

  static printPost(post){
    if(PostList.isPost(post))
    alert(post.id + " " + post.description + " " + post.author + " " + post.createdAt);
  }

  static isPost(post){
    let checkPostKeys = new Array;
    for(let key in post){
      checkPostKeys.push(key);
    }
    if(JSON.stringify(checkPostKeys) != JSON.stringify(PostList.#postKeys)) {
      return false;
    }
    return true;
  }

  getPostsNumber(){
    return this.Posts.length;
  }

	getPost(id){
		return this.Posts.find(item => item.id == id);
  }
  
  editPost(id, post){
    if(!PostList.isPost(post)) {
      return false;
    }

    let postIndex = this.Posts.findIndex(item => item.id == id);

    for(let key in post){
      if(post[key] != null){
        this.Posts[postIndex][key] = post.key;
      }
    }
    
    return true;
  }

  deletePost(id){
    //SWAP WITH LAST, POP LAST
    this.Posts[this.Posts.findIndex(item => item.id == id)] =this.Posts[this.Posts.length - 1];
    this.Posts.pop();
  }
	
	getPage(Skip = 0, Top = this.Posts.length, sortConfig = `createdAt`, filterConfig = ``, filterDescription = ``){
    let returnArray = new Array;

    returnArray = this.Posts.filter(item => (filterConfig == `` || item[filterConfig] == filterDescription));
    returnArray = returnArray.slice(Skip, Top);
    returnArray.sort((a, b) => a[sortConfig] > b[sortConfig] ? 1 : - 1);

    return returnArray;
	}
}


//EXAMPLE
let postList = new PostList(ListJSON);

let Posts = new Array;
Posts = postList.getPage(0, postList.getPostsNumber(), "id", "id", 1);
for(let i = 0 ; i < Posts.length ; ++i){
  PostList.printPost(Posts[i]);
}