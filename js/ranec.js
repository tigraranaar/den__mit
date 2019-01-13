  //Перевод символа в его код
  function ord( string )
  {
	  return string.charCodeAt(0);
  }

  //Перевод кода в символ
  function chr( code )
  {
  	return String.fromCharCode(code);
  }

  //Массив кодов из строки
  function toCharacterCode( string , chift = 0)
  {
    array = [];
    length = string.length;
    for ( i = 0; i < length; i++ )
    {
      array.push( ord( string[i]) + chift );
    }
    return array;
  }
  
  //Массив кодов из строки
  function fromCharacterCode( array , chift = 0)
  {
    string = '';
    length = array.length;
    for ( i = 0; i < length; i++ )
    {
      string += chr( array[i] + chift );
    }
    return string;
  }
  
  //Генерация сверхвозрастающей последовательности
  function superIncreasingSequence( length )
  {
    array = [];
    for ( i = 0; i < length; i++ )
    {
      array.push( Math.pow(2,i) );
    }
    return array;
  }
  
  //Сумма массива
  function totalSum( array )
  {
    total = 0;
    length = array.length;
    for (i = 0; i < length; i++)
    {
      total += array[i];
    }
    return total;
  }
  
  //Проверка числа на простоту
  function isPrime ( number )
  {
    if (number < 2)
    {
      return false;
    }
    sqrt = Math.floor(Math.sqrt(number));
    for (i = 2; i <= sqrt; i++)
    {
      if (number % i == 0)
      {
        return false;
      }
    }
    return true;
  }
  
  //Ближайшее предыдущее простое число
  function previousPrime( number )
  {
    while(1)
    {
      if( isPrime(--number) )
      {
        return number;
      }
    }
  }
  
  //Ближайшее следующее простое число
  function nextPrime( number )
  {
    while(1)
    {
      if( isPrime(++number) )
      {
        return number;
      }
    }
  }
  
  //Функция массового модуля
  function mod( array, multiply, modul )
  {
    arrayNew = [];
    length = array.length;
    for ( i = 0; i < length; i++ )
    {
      arrayNew[i] = (array[i] * multiply) % modul;
    }
    return arrayNew;
  }
  
  //Функция массового перевода в двоичный код
  function integerDigit( string, base = 2, zeroCount = 8)
  { 
    array = [];
    length = string.length;
    for ( i = 0; i < length; i++ )
    {
      array[i] = string[i].toString(base);
      lengthArray = array[i].length;
      for ( j = lengthArray; j < zeroCount; j++ )
      {
        array[i] = '0' + array[i];
      }
    }
    return array;
  }
  
  
  function fromDigit( array, base = 2 )
  {
    result = [];
    length = array.length;
    for ( i = 0; i < length; i++ )
    {
      result.push(parseInt( array[i], 2 ));
    }
    return result;
  }
  
  //Функция шифрования
  function textEncode( bin, key )
  {
    array = [];
    base = bin[0].length;
    length = bin.length;
    for ( i = 0; i < length; i++ )
    {
      total = 0;
      for ( j = 0; j < base; j++)
      {
        total += bin[i][j] * key[j];
      }
      array.push(total);
    }
    return array;
  }
  
  //Функция перевода кодов в пару
  function codeToCouple( array )
  {
    para = [];
    length = array.length;
    for ( i = 0; i < length; i++ )
    {
      para.push(Math.floor(array[i] / 1024));
      para.push(array[i] % 1024);
    }
    return para;
  }
  
  //Функция перевода пары в код
  function coupleToCode ( string ){
     array = [];
    length = string.length;
    for ( i = 0; i < length; i+=2 )
    {
      array.push(string[i] * 1024 + string[i+1]);
    }
    return array;
  }
  
  //Функция нахождения обратного по модулю
  function reverse(a, m)
  {
      array = [];
      n = m;
      tmp = 0;
      while(a)
      {
          array.push( Math.floor( n / a ) );
          tmp = n % a;
          n = a;
          a = tmp;
      }
      length = array.length;
      switch(length)
      {
          case 1:
              return 1;
          case 2:
              return m-array[0];
          default:
              array[1] = array[1] * array[0] + 1;
              for( i = 2; i < length-1;i++)
              {
                  array[i] = array[i] * array[i-1] + array[i-2];
              }
              if(length%2==1)
                  return array[length-2];
              return m-array[length-2];
      }
  }
  
  //Генерация массива определенной длины с подмассивами
  function generateArray( length )
  {
    array = [];
    for (i = 0; i < length; i++)
    {
      array.push([]);
    }
    return array;
  }
  
  //Заполним нулями
  function fillZero( array, length )
  {
    arrayLenght = array.length;
    for (i = 0; i < arrayLenght; i++)
    {
      for (j = 0; j < length; j++)
      {
        array[i].push(0);
      }
    }
    return array;
  }
  
  //Расшифровывка
  function textDecode ( array, b, w, length )
  {
    result = [];
    string = '';
    arrayLenght = array.length;
    for (i = 0; i < arrayLenght; i++)
    {
      for (j = length-1; j > -1; j--)
      {
        if (b[i] >= w[j])
        {
          array[i][j] = 1;
          b[i] -= w[j];
        }
      }
      string = '';
      for (k = 0; k < length; k++ )
      {
        string += array[i][k];
      }
      result.push(string);
    }   
    return result;
  }