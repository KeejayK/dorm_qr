import Song from './Song.js'


const Past = () => {
    return (  
        <div style= {{display: 'flex', marginTop: '10px', gap: '20px'}} >
            <Song img = '/paris_cover.jpg' title = '12345678'/>
            <Song img = '/paris_cover.jpg' title = 'helloooo'/>
        </div>
  
    );
}
 
export default Past;