import BigNumber from 'bignumber.js'

export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  const displayBalance = new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toNumber()
}

export const getFullDisplayBalance = (balance: BigNumber, decimals = 18) => {
  return balance.dividedBy(new BigNumber(10).pow(decimals)).toFixed()
}

export const displayExpDate = (starttime: BigNumber) => {
  let Dates:Date;
  console.log(`utils.foatBalance--starttime->${starttime}`)
  if(starttime ?? starttime.gt(new BigNumber(1262275200))){ // 2010.1.1
    Dates = new Date(starttime.plus(new BigNumber(30*60*1000)).toNumber()); // const expdate = new BigNumber(staked.starttime).plus(new BigNumber(30*3600*1000));
  } else{
    Dates = new Date();
  }
 
  // 年份
  const Year : number = Dates.getFullYear(); 
  // 月份下标是0-11
  const Months : any = ( Dates.getMonth() + 1 ) < 10  ?  "0".concat((Dates.getMonth() + 1).toString()) : ( Dates.getMonth() + 1); 
  // 具体的天数
  const Day : any = Dates.getDate() < 10 ? "0".concat(Dates.getDate().toString()) : Dates.getDate();
  const Hour : any = Dates.getHours() < 10 ? "0".concat(Dates.getHours().toString()) : Dates.getHours();
  const Minustes : any = Dates.getMinutes() < 10 ? "0".concat(Dates.getMinutes().toString()) : Dates.getMinutes();
  const Seconds : any = Dates.getSeconds() < 10 ? "0".concat(Dates.getSeconds().toString()) : Dates.getSeconds();
  return Year.toString().concat("-", Months,"-", Day, " ", Hour, ":", Minustes, ":", Seconds);
}
