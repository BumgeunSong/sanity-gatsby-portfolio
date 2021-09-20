export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6148365282275dba2521a740',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-m5n37idv',
                  apiId: 'd6379e9c-ad1a-4b3d-b053-b844df776e53'
                },
                {
                  buildHookId: '61483652730b2c3dd96de663',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ggcvv48c',
                  apiId: 'c2e6f6c4-e243-49f2-b997-3403f8a20f53'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BumgeunSong/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ggcvv48c.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
