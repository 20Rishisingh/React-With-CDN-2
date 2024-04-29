const Topics = () => {
   return(
      <div>
         <h1> "Topics" </h1>
         
         <a href="https://www.geeksforgeeks.org/reactjs-components/">React Components</a>

         <p>
         Components in React serve as independent and reusable code blocks for UI elements. They represent different parts of a web page and contain both structure and behavior. They are similar to JavaScript functions and make creating and managing complex user interfaces easier by breaking them down into smaller, reusable pieces.
         </p>
         
         <hr></hr>

         <a href="https://www.geeksforgeeks.org/reactjs-fragments/">React Fragments</a>
         
         <p>
         We know that we make use of the render method inside a component whenever we want to render something to the screen. We may render a single element or multiple elements, though rendering multiple elements will require a ‘div’ tag around the content as the render method will only render a single root node inside it at a time. 
         </p>
         
         <hr></hr>

         <a href="https://www.geeksforgeeks.org/reactjs-props-set-1/">React Props</a>
         <p>
         React allows us to pass information to a Component using something called props (which stands for properties). Props are objects which can be used inside a component.
         </p>

         <hr></hr>
      </div>
   )
}

let root = document.getElementById("main");
ReactDOM.render(<Topics/>, root);

