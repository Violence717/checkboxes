import './App.css'

import List from './components/List'

const App = () => {

  const data = [
    {
      title: 'Европа',
      population: 746419440,
      children: [
        {
          title: 'Россия',
          population: 145478097,
          children: [
            {
              title: 'Сибирь',
              population: 33765005
            }
          ]
        },
        {
  
          title: 'Германия',
          population: 83190556
        },
        {
  
          title: 'Франция',
          population: 67413000
        }
      ]
    },
    {
      title: 'Азия',
      population: 4560667108,
      children: [
        {
          title: 'Китай',
          population: 1412600000
        },
        {
          title: 'Япония',
          population: 125440000
        },
        {
          title: 'Индия',
          population: 1352642280
        }
      ]
    },
    {
      title: 'Северная Америка',
      population: 592296233,
      children: [
        {
          title: 'США',
          population: 331893745
        },
        {
          title: 'Канада',
          population: 38436447
        },
        {
          title: 'Мексика',
          population: 126014024
        }
      ]
    }
  ]

  return (
    <div className="App">
      <h1>Multi-level list</h1>
      <List array={data} currentStatus={false} />
    </div>
  )

}

export default App
