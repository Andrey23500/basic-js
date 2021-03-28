const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if(typeof(sampleActivity)!="string") return false;
  if(!/[0-9]/.test(sampleActivity))return false;
  
  sampleActivity=Number(sampleActivity);
  if(isNaN(sampleActivity)) return false;
  if(sampleActivity>15||sampleActivity<=0)return false;

  let k=0.693/HALF_LIFE_PERIOD;

 return Math.ceil(Math.log((MODERN_ACTIVITY/sampleActivity))/k);
};
