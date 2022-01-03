import './App.css';

function App() {

  if (!(window.kakao && window.kakao.maps)) {
    const script = document.createElement('script');
    script.onload = () => console.log('1');
    script.src =`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d9fafc8c8b97f0bccf627ef7afb9cb8d&libraries=services`;
    document.head.appendChild(script);

  // const test = function() {
  // }
  // else {
  //   this.getLocationPc();
  // }
  }
  // const getLocationPc = function() {

  return (
    <div className="App">
      <div id="map">

      </div>
    </div>
  );
}

export default App;

