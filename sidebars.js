module.exports = {
  docs: [
    {
      type: 'category',
      label: "Home",
      collapsed: false,
      items: ['introduction','about']
    }, 
    {
      type: 'category',
      label: "Data Structures",
      items: ['ds/intro', 'pointers',{
        type: 'category',
        label: "Complexity",
        items: ['ds/timecol','ds/spacecol']
      },{
        type: 'category',
        label: "Arrays",
        items: ['ds/arrays/arrays','ds/arrays/arrayadt','ds/arrays/arraypointer','ds/arrays/arraycompiler']
      },{
        type: 'category',
        label: "Stack",
        items: ['ds/stack/stack']
      },{
        type: 'category',
        label: "Queue",
        items: ['ds/queue/queue']
      }]
    },{
      type: 'category',
      label: 'Algorithms',
      items: ['algorithms/basics','algorithms/maths','algorithms/cppstl','algorithms/sorting','algorithms/arrays','algorithms/bitmanipulation']
    }
     
  ],
};
