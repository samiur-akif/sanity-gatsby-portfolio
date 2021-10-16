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
                  buildHookId: '616b20105652e5640851697d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ucworstx',
                  apiId: '2fd6a52b-830c-4080-9398-c16725ab4dd0'
                },
                {
                  buildHookId: '616b2010957e7fa3443413bc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-s784zwbt',
                  apiId: 'f4b42cd3-623b-4492-b76e-f92fe7c4540c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samiur-r/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-s784zwbt.netlify.app',
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
