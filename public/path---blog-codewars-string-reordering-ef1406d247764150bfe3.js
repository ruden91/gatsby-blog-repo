webpackJsonp([0xaf31198c508a],{1031:function(A,e){A.exports={data:{contentfulBlogPost:{title:"[codewars] String Reordering",id:"c7yuyCA8spyQ6Q2UO2gSQ0w",tags:["general"],categories:["algorithm"],publishDate:"2018-05-29T13:00+09:00",heroImage:{sizes:{base64:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAALABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAwQFCAn/xAAnEAABAwMDBAEFAAAAAAAAAAABAgMEBREhAAYSBxMxQVEVIlJxkf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAgEQEAAgICAQUAAAAAAAAAAAABAAIDERIhUQQxQXGB/9oADAMBAAIRAxEAPwDRmo7jqsJlgxdtzZ5W2hSk99pCkEqsUquq1wM4JGf2RhgJ2yhi43ZWVJUTtWY3xWU3XIatb8vtJNs/F8HGhdAu4zHUtcrbofmSVMqqJ0BmRPb+mSXOV4zj2UgKIB9eQL+Pek1eRtJT6nFTBlceK/INd+ev36gdqVGRUqQ09Jc7jhWU8rAYx8aLxJk0saqKlFDqORCTg8TY/wBGgs+8OhKVdbdjUhfUCdzRLdOTydnyFnKlKOSu9rk49eBjTK2QjdE//9k=",aspectRatio:1.8083623693379791,src:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=1280&q=50",srcSet:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=320&h=177&q=50 320w,\n//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=519&h=287&q=50 519w",sizes:"(max-width: 1280px) 100vw, 1280px"}},body:{childMarkdownRemark:{html:"<p>The input will be an array of dictionaries.</p>\n<p>Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).</p>\n<p>The keys are not reoccurring and their range is -999 &#x3C; key &#x3C; 999. The dictionaries' keys &#x26; values will always be strings and will always not be empty.</p>\n<p>Example</p>\n<pre><code>Input:\nList = [\n        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},\n        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}\n       ]\n\nOutput:\n'Vatsan took his dog for a spin'\n</code></pre>\n<p>My Answer</p>\n<pre><code>function sentence(List) {\n  return List.sort((curr, next) => Object.keys(curr)[0] - Object.keys(next)[0]).map(item => item[Object.keys(item)[0]]).join(' ');\n}\n</code></pre>"}}}},pathContext:{slug:"codewars-string-reordering"}}}});
//# sourceMappingURL=path---blog-codewars-string-reordering-ef1406d247764150bfe3.js.map