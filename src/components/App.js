
// importing useState hook for state management.
import { useState } from 'react';

// importing App.css file for styles.
import '../assets/App.css';

//App function component.
function App() {

//creating result to store state and setResult to change the state, using useState hook.
  const [result, setResult] = useState('')

//function to handle click events.
  function clickHandler(button) {

    switch (button) {

      case 'C':
        return setResult('');

      case 'backspace':
        return setResult(result.slice(0, -1));

      case '=':

        if (
          result === '' ||
          result.slice(0, 2) === '00' ||
          result.slice(0) === '*' ||
          result.slice(0) === '+' ||
          result.slice(0) === '-' ||
          result.slice(0) === '/' ||
          result.slice(-1) === '*' ||
          result.slice(-1) === '+' ||
          result.slice(-1) === '-' ||
          result.slice(-1) === '/' ||
          result.indexOf('**') !== -1 ||
          result.indexOf('++') !== -1 ||
          result.indexOf('--') !== -1 ||
          result.indexOf('//') !== -1
        ) {
          return;
        }


        let no = eval(result).toString();
        return setResult(no);

      case '+':
        return setResult(result + '+');

      case '-':
        return setResult(result + '-');

      case '/':
        return setResult(result + '/');

      case '*':
        return setResult(result + '*');

      case '.':
        return setResult(result + '.')

      case 0:
        return setResult(result + '0')

      case 1:
        return setResult(result + '1');

      case 2:
        return setResult(result + '2');

      case 3:
        return setResult(result + '3');

      case 4:
        return setResult(result + '4');

      case 5:
        return setResult(result + '5');

      case 6:
        return setResult(result + '6');

      case 7:
        return setResult(result + '7');

      case 8:
        return setResult(result + '8');

      case 9:
        return setResult(result + '9');

      default:
        return setResult('');

    }

  }

  return (

    //calulator jsx element
    <div className="App-Calculator">

      {/* display component of the Calculator */}
      <div className="display"><span><b>{result}</b></span></div>

      {/* num-pad component of the Calculator */}
        <table className='num-pad'>

          <tbody>

            <tr>

              <td id='clear-button' onClick={() => clickHandler('C')}><span>C</span></td>
              <td id='backspace-button' onClick={() => clickHandler('backspace')}><span><i class="fa-solid fa-delete-left"></i></span></td>
              <td onClick={() => clickHandler('.')}><span>.</span></td>
              <td className='operator-buttons' onClick={() => clickHandler('+')}><span>+</span></td>

            </tr>

            <tr>

              <td onClick={() => clickHandler(7)}><span>7</span></td>
              <td onClick={() => clickHandler(8)}><span>8</span></td>
              <td onClick={() => clickHandler(9)}><span>9</span></td>
              <td className='operator-buttons' onClick={() => clickHandler('-')}><span>-</span></td>

            </tr>

            <tr>

              <td onClick={() => clickHandler(4)}><span>4</span></td>
              <td onClick={() => clickHandler(5)}><span>5</span></td>
              <td onClick={() => clickHandler(6)}><span>6</span></td>
              <td className='operator-buttons' onClick={() => clickHandler('/')}><span>/</span></td>

            </tr>

            <tr>

              <td onClick={() => clickHandler(1)}><span>1</span></td>
              <td onClick={() => clickHandler(2)}><span>2</span></td>
              <td onClick={() => clickHandler(3)}><span>3</span></td>
              <td className='operator-buttons' onClick={() => clickHandler('*')}><span>*</span></td>

            </tr>

            <tr>

              <td colSpan='2' onClick={() => clickHandler(0)}><span>0</span></td>
              <td id='equalsTo-button' colSpan='2' onClick={() => clickHandler('=')}><span>=</span></td>

            </tr>

          </tbody>

        </table>

    </div>
  );
}

export default App;
