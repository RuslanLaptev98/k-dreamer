import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import Header from './components/Header/Header'
import Welcome from './pages/Welcome/Welcome'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <div className="container">
                    <Welcome />
                </div>
            </div>
        </Provider>
    )
}

export default App
