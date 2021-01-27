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
      label: "DSA",
      items: ['dsa/intro','dsa/timespace',{
        type: 'category',
        label: "Arrays",
        items: ['dsa/arrays/arrays','dsa/arrays/arrayadt','dsa/arrays/arraypointer','dsa/arrays/arraycompiler',{
          type: 'category',
          label: "Algorithms",
          items: ['dsa/arrays/algorithms/basic']
        },{
          type: 'category',
          label: "Problems",
          items: ['dsa/arrays/problems/problems']
        }]
      }]
    }
     
  ],
};