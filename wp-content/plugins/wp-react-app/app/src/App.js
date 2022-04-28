import React from 'react';
import './scss/App.scss';

function App( props ) {
  const posts = props.posts.posts || [];
  console.log("posts : ",posts);
  return (
    <div className="App">
       {
        posts ? 
        posts.map(post => (
          <div className='card'>
            <div className='post_title'>
              {post.post_title}
            </div>
            <div className='post_content' dangerouslySetInnerHTML={{ __html: post.post_content }}></div>
          </div>
        )) : <p>Data not found</p>
      }
    </div>
  );
}

export default App;
