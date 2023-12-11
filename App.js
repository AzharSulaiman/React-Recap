// const heading = React.createElement('h1', {}, 'Hello World from React!');
const parent = React.createElement('div', {id:'parent'}, [React.createElement('div', {id:'child'}, [React.createElement('h2', {id: 'grandChild1'}, 'I am grandchild1'), React.createElement('h2', {id: 'grandChild2'}, 'I am grandchild2')]), React.createElement('h2', {id:'child2'}, 'I am Child2!')]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);