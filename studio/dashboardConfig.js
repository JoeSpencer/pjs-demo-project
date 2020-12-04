export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fca8fda1df06f00e867d711',
                  title: 'Sanity Studio',
                  name: 'pjs-demo-project-studio',
                  apiId: '241bc55d-eb0d-4bf6-97b9-05a008cdf5ba'
                },
                {
                  buildHookId: '5fca8fdac3b2d8008cfa8c26',
                  title: 'Blog Website',
                  name: 'pjs-demo-project',
                  apiId: '01a423f4-0c31-4b9e-8ba8-6b52233589da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoeSpencer/pjs-demo-project',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://pjs-demo-project.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
