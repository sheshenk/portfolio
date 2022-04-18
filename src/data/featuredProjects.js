import the_good_place from './images/the-good-place.jpg'
import homana from './images/homana.jpg'
import ml_prop from './images/ml-prop.jpg'

const featuredProjects = [
    {
        title: 'The Good Place',
        appLink: 'https://the-good-place.herokuapp.com/',
        description: 'The Good Place is a virtual platform that gamifies the process of volunteering' + 
                    ' and engagement between organizations and individuals by providing self-incentivizing projects, ' + 
                    'certifications, all while connecting users to the larger community, and engaging' + 
                    ' them on the housing crisis.',
        otherLinks: [
            {
                prompt: 'View the code on GitHub',
                link: 'https://github.com/sheshenk/the-good-place'
            }
        ],
        stack: [
            'React',
            'Firebase',
            'Heroku',
            'Sketch'
        ],
        image: the_good_place
    },
    {
        title: 'Homana',
        appLink: 'https://sheshenk.github.io/homana/',
        description: 'The vision of Homana is to reimagine the world of real estate as a tokenised market'+
                    ' accessible to all. Originally perceived as a solution to property fraud in developing'+
                    ' countries, Homana works on the Solana blockchain to make property ownership immutable '+
                    'and transferrable as NFTs.',
        otherLinks: [
            {
                prompt: 'View the code on GitHub',
                link: 'https://github.com/sheshenk/homana'
            }
        ],
        stack: [
            'React',
            'Solana',
            'Firebase',
            'Sketch',
            'Next.js'
        ],
        image: homana
    },
    {
        title: 'ML Property Recommender',
        appLink: '',
        description: 'Using data from data.gov, OneMap, and scraping various property listing websites, our project team created a model for various property types in Singapore (HDB, Private, Landed), to recommend ideal prices and possible trends. This helps users to make informed decisions on the value of the properties they choose to buy.',
        otherLinks: [
            {
                prompt: 'View the code on GitHub',
                link: 'https://github.com/NUS-Fintech-Society/ML_Property_Recommender'
            }
        ],
        stack: ['Python', 'Angular', 'Heroku', 'NumPy', 'Firebase', 'Pandas', 'PyTorch', 'Selenium', 'Jupyter', 'Flask'],
        image: ml_prop
    }
]
export default featuredProjects