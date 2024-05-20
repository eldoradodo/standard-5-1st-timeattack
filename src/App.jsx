export default function App() {

  const [ count, setCount ] = useState(0);

  const plus = () => setCount(count + number );
  const minus = () => setCount(count - number ); 

  const onChange = (e) => setCount(e.target.value);
  
  const onReset = () => setCount(0);
  
  if (!count .trim())
    return alert ("숫자를 입력해주세요.");

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" placeholder="숫자" onChange={onChange}/> 만큼을 
        <button onClick={plus} >더할게요</button> 
        <button onClick={minus}>뺄게요</button>
        <button onClick={onReset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}
