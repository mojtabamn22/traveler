<?php
    /**
     * @since 1.1.8
     **/
    if ( !class_exists( 'Jdf' ) ) {
        class Jdf {

            function jdate($format,$timestamp='',$none='',$time_zone='Asia/Tehran',$tr_num='fa'){
        
            $T_sec=0;/* <= رفع خطاي زمان سرور ، با اعداد '+' و '-' بر حسب ثانيه */
        
            if($time_zone!='local')date_default_timezone_set(($time_zone==='')?'Asia/Tehran':$time_zone);
            $ts=$T_sec+(($timestamp==='')?time():tr_num($timestamp));
            $date=explode('_',date('H_i_j_n_O_P_s_w_Y',$ts));
            list($j_y,$j_m,$j_d)=gregorian_to_jalali($date[8],$date[3],$date[2]);
            $doy=($j_m<7)?(($j_m-1)*31)+$j_d-1:(($j_m-7)*30)+$j_d+185;
            $kab=(((($j_y%33)%4)-1)==((int)(($j_y%33)*0.05)))?1:0;
            $sl=strlen($format);
            $out='';
            for($i=0; $i<$sl; $i++){
            $sub=substr($format,$i,1);
            if($sub=='\\'){
                $out.=substr($format,++$i,1);
                continue;
            }
            switch($sub){
        
                case'E':case'R':case'x':case'X':
                $out.='http://jdf.scr.ir';
                break;
        
                case'B':case'e':case'g':
                case'G':case'h':case'I':
                case'T':case'u':case'Z':
                $out.=date($sub,$ts);
                break;
        
                case'a':
                $out.=($date[0]<12)?'ق.ظ':'ب.ظ';
                break;
        
                case'A':
                $out.=($date[0]<12)?'قبل از ظهر':'بعد از ظهر';
                break;
        
                case'b':
                $out.=(int)($j_m/3.1)+1;
                break;
        
                case'c':
                $out.=$j_y.'/'.$j_m.'/'.$j_d.' ،'.$date[0].':'.$date[1].':'.$date[6].' '.$date[5];
                break;
        
                case'C':
                $out.=(int)(($j_y+99)/100);
                break;
        
                case'd':
                $out.=($j_d<10)?'0'.$j_d:$j_d;
                break;
        
                case'D':
                $out.=jdate_words(array('kh'=>$date[7]),' ');
                break;
        
                case'f':
                $out.=jdate_words(array('ff'=>$j_m),' ');
                break;
        
                case'F':
                $out.=jdate_words(array('mm'=>$j_m),' ');
                break;
        
                case'H':
                $out.=$date[0];
                break;
        
                case'i':
                $out.=$date[1];
                break;
        
                case'j':
                $out.=$j_d;
                break;
        
                case'J':
                $out.=jdate_words(array('rr'=>$j_d),' ');
                break;
        
                case'k';
                $out.=tr_num(100-(int)($doy/($kab+365)*1000)/10,$tr_num);
                break;
        
                case'K':
                $out.=tr_num((int)($doy/($kab+365)*1000)/10,$tr_num);
                break;
        
                case'l':
                $out.=jdate_words(array('rh'=>$date[7]),' ');
                break;
        
                case'L':
                $out.=$kab;
                break;
        
                case'm':
                $out.=($j_m>9)?$j_m:'0'.$j_m;
                break;
        
                case'M':
                $out.=jdate_words(array('km'=>$j_m),' ');
                break;
        
                case'n':
                $out.=$j_m;
                break;
        
                case'N':
                $out.=$date[7]+1;
                break;
        
                case'o':
                $jdw=($date[7]==6)?0:$date[7]+1;
                $dny=364+$kab-$doy;
                $out.=($jdw>($doy+3) and $doy<3)?$j_y-1:(((3-$dny)>$jdw and $dny<3)?$j_y+1:$j_y);
                break;
        
                case'O':
                $out.=$date[4];
                break;
        
                case'p':
                $out.=jdate_words(array('mb'=>$j_m),' ');
                break;
        
                case'P':
                $out.=$date[5];
                break;
        
                case'q':
                $out.=jdate_words(array('sh'=>$j_y),' ');
                break;
        
                case'Q':
                $out.=$kab+364-$doy;
                break;
        
                case'r':
                $key=jdate_words(array('rh'=>$date[7],'mm'=>$j_m));
                $out.=$date[0].':'.$date[1].':'.$date[6].' '.$date[4].' '.$key['rh'].'، '.$j_d.' '.$key['mm'].' '.$j_y;
                break;
        
                case's':
                $out.=$date[6];
                break;
        
                case'S':
                $out.='ام';
                break;
        
                case't':
                $out.=($j_m!=12)?(31-(int)($j_m/6.5)):($kab+29);
                break;
        
                case'U':
                $out.=$ts;
                break;
        
                case'v':
                $out.=jdate_words(array('ss'=>($j_y%100)),' ');
                break;
        
                case'V':
                $out.=jdate_words(array('ss'=>$j_y),' ');
                break;
        
                case'w':
                $out.=($date[7]==6)?0:$date[7]+1;
                break;
        
                case'W':
                $avs=(($date[7]==6)?0:$date[7]+1)-($doy%7);
                if($avs<0)$avs+=7;
                $num=(int)(($doy+$avs)/7);
                if($avs<4){
                $num++;
                }elseif($num<1){
                $num=($avs==4 or $avs==((((($j_y%33)%4)-2)==((int)(($j_y%33)*0.05)))?5:4))?53:52;
                }
                $aks=$avs+$kab;
                if($aks==7)$aks=0;
                $out.=(($kab+363-$doy)<$aks and $aks<3)?'01':(($num<10)?'0'.$num:$num);
                break;
        
                case'y':
                $out.=substr($j_y,2,2);
                break;
        
                case'Y':
                $out.=$j_y;
                break;
        
                case'z':
                $out.=$doy;
                break;
        
                default:$out.=$sub;
            }
            }
            return($tr_num!='en')?tr_num($out,'fa','.'):$out;
            }
        
            /*	F	*/
            function jstrftime($format,$timestamp='',$none='',$time_zone='Asia/Tehran',$tr_num='fa'){
        
            $T_sec=0;/* <= رفع خطاي زمان سرور ، با اعداد '+' و '-' بر حسب ثانيه */
        
            if($time_zone!='local')date_default_timezone_set(($time_zone==='')?'Asia/Tehran':$time_zone);
            $ts=$T_sec+(($timestamp==='')?time():tr_num($timestamp));
            $date=explode('_',date('h_H_i_j_n_s_w_Y',$ts));
            list($j_y,$j_m,$j_d)=gregorian_to_jalali($date[7],$date[4],$date[3]);
            $doy=($j_m<7)?(($j_m-1)*31)+$j_d-1:(($j_m-7)*30)+$j_d+185;
            $kab=(((($j_y%33)%4)-1)==((int)(($j_y%33)*0.05)))?1:0;
            $sl=strlen($format);
            $out='';
            for($i=0; $i<$sl; $i++){
            $sub=substr($format,$i,1);
            if($sub=='%'){
                $sub=substr($format,++$i,1);
            }else{
                $out.=$sub;
                continue;
            }
            switch($sub){
        
                /* Day */
                case'a':
                $out.=jdate_words(array('kh'=>$date[6]),' ');
                break;
        
                case'A':
                $out.=jdate_words(array('rh'=>$date[6]),' ');
                break;
        
                case'd':
                $out.=($j_d<10)?'0'.$j_d:$j_d;
                break;
        
                case'e':
                $out.=($j_d<10)?' '.$j_d:$j_d;
                break;
        
                case'j':
                $out.=str_pad($doy+1,3,0,STR_PAD_LEFT);
                break;
        
                case'u':
                $out.=$date[6]+1;
                break;
        
                case'w':
                $out.=($date[6]==6)?0:$date[6]+1;
                break;
        
                /* Week */
                case'U':
                $avs=(($date[6]<5)?$date[6]+2:$date[6]-5)-($doy%7);
                if($avs<0)$avs+=7;
                $num=(int)(($doy+$avs)/7)+1;
                if($avs>3 or $avs==1)$num--;
                $out.=($num<10)?'0'.$num:$num;
                break;
        
                case'V':
                $avs=(($date[6]==6)?0:$date[6]+1)-($doy%7);
                if($avs<0)$avs+=7;
                $num=(int)(($doy+$avs)/7);
                if($avs<4){
                $num++;
                }elseif($num<1){
                $num=($avs==4 or $avs==((((($j_y%33)%4)-2)==((int)(($j_y%33)*0.05)))?5:4))?53:52;
                }
                $aks=$avs+$kab;
                if($aks==7)$aks=0;
                $out.=(($kab+363-$doy)<$aks and $aks<3)?'01':(($num<10)?'0'.$num:$num);
                break;
        
                case'W':
                $avs=(($date[6]==6)?0:$date[6]+1)-($doy%7);
                if($avs<0)$avs+=7;
                $num=(int)(($doy+$avs)/7)+1;
                if($avs>3)$num--;
                $out.=($num<10)?'0'.$num:$num;
                break;
        
                /* Month */
                case'b':
                case'h':
                $out.=jdate_words(array('km'=>$j_m),' ');
                break;
        
                case'B':
                $out.=jdate_words(array('mm'=>$j_m),' ');
                break;
        
                case'm':
                $out.=($j_m>9)?$j_m:'0'.$j_m;
                break;
        
                /* Year */
                case'C':
                $tmp=(int)($j_y/100);
                $out.=($tmp>9)?$tmp:'0'.$tmp;
                break;
        
                case'g':
                $jdw=($date[6]==6)?0:$date[6]+1;
                $dny=364+$kab-$doy;
                $out.=substr(($jdw>($doy+3) and $doy<3)?$j_y-1:(((3-$dny)>$jdw and $dny<3)?$j_y+1:$j_y),2,2);
                break;
        
                case'G':
                $jdw=($date[6]==6)?0:$date[6]+1;
                $dny=364+$kab-$doy;
                $out.=($jdw>($doy+3) and $doy<3)?$j_y-1:(((3-$dny)>$jdw and $dny<3)?$j_y+1:$j_y);
                break;
        
                case'y':
                $out.=substr($j_y,2,2);
                break;
        
                case'Y':
                $out.=$j_y;
                break;
        
                /* Time */
                case'H':
                $out.=$date[1];
                break;
        
                case'I':
                $out.=$date[0];
                break;
        
                case'l':
                $out.=($date[0]>9)?$date[0]:' '.(int)$date[0];
                break;
        
                case'M':
                $out.=$date[2];
                break;
        
                case'p':
                $out.=($date[1]<12)?'قبل از ظهر':'بعد از ظهر';
                break;
        
                case'P':
                $out.=($date[1]<12)?'ق.ظ':'ب.ظ';
                break;
        
                case'r':
                $out.=$date[0].':'.$date[2].':'.$date[5].' '.(($date[1]<12)?'قبل از ظهر':'بعد از ظهر');
                break;
        
                case'R':
                $out.=$date[1].':'.$date[2];
                break;
        
                case'S':
                $out.=$date[5];
                break;
        
                case'T':
                $out.=$date[1].':'.$date[2].':'.$date[5];
                break;
        
                case'X':
                $out.=$date[0].':'.$date[2].':'.$date[5];
                break;
        
                case'z':
                $out.=date('O',$ts);
                break;
        
                case'Z':
                $out.=date('T',$ts);
                break;
        
                /* Time and Date Stamps */
                case'c':
                $key=jdate_words(array('rh'=>$date[6],'mm'=>$j_m));
                $out.=$date[1].':'.$date[2].':'.$date[5].' '.date('P',$ts).' '.$key['rh'].'، '.$j_d.' '.$key['mm'].' '.$j_y;
                break;
        
                case'D':
                $out.=substr($j_y,2,2).'/'.(($j_m>9)?$j_m:'0'.$j_m).'/'.(($j_d<10)?'0'.$j_d:$j_d);
                break;
        
                case'F':
                $out.=$j_y.'-'.(($j_m>9)?$j_m:'0'.$j_m).'-'.(($j_d<10)?'0'.$j_d:$j_d);
                break;
        
                case's':
                $out.=$ts;
                break;
        
                case'x':
                $out.=substr($j_y,2,2).'/'.(($j_m>9)?$j_m:'0'.$j_m).'/'.(($j_d<10)?'0'.$j_d:$j_d);
                break;
        
                /* Miscellaneous */
                case'n':
                $out.="\n";
                break;
        
                case't':
                $out.="\t";
                break;
        
                case'%':
                $out.='%';
                break;
        
                default:$out.=$sub;
            }
            }
            return($tr_num!='en')?tr_num($out,'fa','.'):$out;
            }
        
            /*	F	*/
            function jmktime($h='',$m='',$s='',$jm='',$jd='',$jy='',$none='',$timezone='Asia/Tehran'){
            if($timezone!='local')date_default_timezone_set($timezone);
            if($h===''){
            return time();
            }else{
                list($h,$m,$s,$jm,$jd,$jy)=explode('_',tr_num($h.'_'.$m.'_'.$s.'_'.$jm.'_'.$jd.'_'.$jy));
            if($m===''){
            return mktime($h);
            }else{
            if($s===''){
                return mktime($h,$m);
            }else{
                if($jm===''){
                return mktime($h,$m,$s);
                }else{
                $jdate=explode('_',jdate('Y_j','','',$timezone,'en'));
                if($jd===''){
                list($gy,$gm,$gd)=jalali_to_gregorian($jdate[0],$jm,$jdate[1]);
                return mktime($h,$m,$s,$gm);
                }else{
                if($jy===''){
                list($gy,$gm,$gd)=jalali_to_gregorian($jdate[0],$jm,$jd);
                return mktime($h,$m,$s,$gm,$gd);
                }else{
                list($gy,$gm,$gd)=jalali_to_gregorian($jy,$jm,$jd);
                return mktime($h,$m,$s,$gm,$gd,$gy);
                }
                }
                }
            }
            }
            }
            }
        
            /*	F	*/
            function jgetdate($timestamp='',$none='',$timezone='Asia/Tehran',$tn='en'){
            $ts=($timestamp==='')?time():tr_num($timestamp);
            $jdate=explode('_',jdate('F_G_i_j_l_n_s_w_Y_z',$ts,'',$timezone,$tn));
            return array(
                'seconds'=>tr_num((int)tr_num($jdate[6]),$tn),
                'minutes'=>tr_num((int)tr_num($jdate[2]),$tn),
                'hours'=>$jdate[1],
                'mday'=>$jdate[3],
                'wday'=>$jdate[7],
                'mon'=>$jdate[5],
                'year'=>$jdate[8],
                'yday'=>$jdate[9],
                'weekday'=>$jdate[4],
                'month'=>$jdate[0],
                0=>tr_num($ts,$tn)
            );
            }
        
            /*	F	*/
            function jcheckdate($jm,$jd,$jy){
            list($jm,$jd,$jy)=explode('_',tr_num($jm.'_'.$jd.'_'.$jy));
            $l_d=($jm==12)?((((($jy%33)%4)-1)==((int)(($jy%33)*0.05)))?30:29):31-(int)($jm/6.5);
            return($jm>12 or $jd>$l_d or $jm<1 or $jd<1 or $jy<1)?false:true;
            }
        
            /*	F	*/
            function tr_num($str,$mod='en',$mf='٫'){
            $num_a=array('0','1','2','3','4','5','6','7','8','9','.');
            $key_a=array('۰','۱','۲','۳','۴','۵','۶','۷','۸','۹',$mf);
            return($mod=='fa')?str_replace($num_a,$key_a,$str):str_replace($key_a,$num_a,$str);
            }
        
            /*	F	*/
            function jdate_words($array,$mod=''){
            foreach($array as $type=>$num){
            $num=(int)tr_num($num);
            switch($type){
        
                case'ss':
                $sl=strlen($num);
                $xy3=substr($num,2-$sl,1);
                $h3=$h34=$h4='';
                if($xy3==1){
                $p34='';
                $k34=array('ده','یازده','دوازده','سیزده','چهارده','پانزده','شانزده','هفده','هجده','نوزده');
                $h34=$k34[substr($num,2-$sl,2)-10];
                }else{
                $xy4=substr($num,3-$sl,1);
                $p34=($xy3==0 or $xy4==0)?'':' و ';
                $k3=array('','','بیست','سی','چهل','پنجاه','شصت','هفتاد','هشتاد','نود');
                $h3=$k3[$xy3];
                $k4=array('','یک','دو','سه','چهار','پنج','شش','هفت','هشت','نه');
                $h4=$k4[$xy4];
                }
                $array[$type]=(($num>99)?str_replace(array('12','13','14','19','20')
            ,array('هزار و دویست','هزار و سیصد','هزار و چهارصد','هزار و نهصد','دوهزار')
            ,substr($num,0,2)).((substr($num,2,2)=='00')?'':' و '):'').$h3.$p34.$h34.$h4;
                break;
        
                case'mm':
                $key=array('فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند');
                $array[$type]=$key[$num-1];
                break;
        
                case'rr':
                $key=array('یک','دو','سه','چهار','پنج','شش','هفت','هشت','نه','ده','یازده','دوازده','سیزده'
            ,'چهارده','پانزده','شانزده','هفده','هجده','نوزده','بیست','بیست و یک','بیست و دو','بیست و سه'
            ,'بیست و چهار','بیست و پنج','بیست و شش','بیست و هفت','بیست و هشت','بیست و نه','سی','سی و یک');
                $array[$type]=$key[$num-1];
                break;
        
                case'rh':
                $key=array('یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه');
                $array[$type]=$key[$num];
                break;
        
                case'sh':
                $key=array('مار','اسب','گوسفند','میمون','مرغ','سگ','خوک','موش','گاو','پلنگ','خرگوش','نهنگ');
                $array[$type]=$key[$num%12];
                break;
        
                case'mb':
                $key=array('حمل','ثور','جوزا','سرطان','اسد','سنبله','میزان','عقرب','قوس','جدی','دلو','حوت');
                $array[$type]=$key[$num-1];
                break;
        
                case'ff':
                $key=array('بهار','تابستان','پاییز','زمستان');
                $array[$type]=$key[(int)($num/3.1)];
                break;
        
                case'km':
                $key=array('فر','ار','خر','تی‍','مر','شه‍','مه‍','آب‍','آذ','دی','به‍','اس‍');
                $array[$type]=$key[$num-1];
                break;
        
                case'kh':
                $key=array('ی','د','س','چ','پ','ج','ش');
                $array[$type]=$key[$num];
                break;
        
                default:$array[$type]=$num;
            }
            }
            return($mod==='')?$array:implode($mod,$array);
            }
        
        
            /** Gregorian & Jalali (Hijri_Shamsi,Solar) date converter Functions
            Author: JDF.SCR.IR =>> Download Full Version : http://jdf.scr.ir/jdf
            License: GNU/LGPL _ Open Source & Free _ Version: 2.70 : [2017=1395]
            --------------------------------------------------------------------
            1461 = 365*4 + 4/4   &  146097 = 365*400 + 400/4 - 400/100 + 400/400
            12053 = 365*33 + 32/4    &    36524 = 365*100 + 100/4 - 100/100   */
        
            /*	F	*/
            function gregorian_to_jalali($gy,$gm,$gd,$mod=''){
                list($gy,$gm,$gd)=explode('_',tr_num($gy.'_'.$gm.'_'.$gd));/* <= Extra :اين سطر ، جزء تابع اصلي نيست */
            $g_d_m=array(0,31,59,90,120,151,181,212,243,273,304,334);
            if($gy > 1600){
            $jy=979;
            $gy-=1600;
            }else{
            $jy=0;
            $gy-=621;
            }
            $gy2=($gm > 2)?($gy+1):$gy;
            $days=(365*$gy) +((int)(($gy2+3)/4)) -((int)(($gy2+99)/100)) +((int)(($gy2+399)/400)) -80 +$gd +$g_d_m[$gm-1];
            $jy+=33*((int)($days/12053));
            $days%=12053;
            $jy+=4*((int)($days/1461));
            $days%=1461;
            $jy+=(int)(($days-1)/365);
            if($days > 365)$days=($days-1)%365;
            if($days < 186){
            $jm=1+(int)($days/31);
            $jd=1+($days%31);
            }else{
            $jm=7+(int)(($days-186)/30);
            $jd=1+(($days-186)%30);
            }
            return($mod==='')?array($jy,$jm,$jd):$jy .$mod .$jm .$mod .$jd;
            }
        
            /*	F	*/
            function jalali_to_gregorian($jy,$jm,$jd,$mod=''){
            if($jy > 979){
            $gy=1600;
            $jy-=979;
            }else{
            $gy=621;
            }
            $days=(365*$jy) +(((int)($jy/33))*8) +((int)((($jy%33)+3)/4)) +78 +$jd +(($jm<7)?($jm-1)*31:(($jm-7)*30)+186);
            $gy+=400*((int)($days/146097));
            $days%=146097;
            if($days > 36524){
            $gy+=100*((int)(--$days/36524));
            $days%=36524;
            if($days >= 365)$days++;
            }
            $gy+=4*((int)(($days)/1461));
            $days%=1461;
            $gy+=(int)(($days-1)/365);
            if($days > 365)$days=($days-1)%365;
            $gd=$days+1;
            foreach(array(0,31,((($gy%4==0) and ($gy%100!=0)) or ($gy%400==0))?29:28 ,31,30,31,30,31,31,30,31,30,31) as $gm=>$v){
            if($gd <= $v)break;
            $gd-=$v;
            }
            return($mod==='')?array($gy,$gm,$gd):$gy .$mod .$gm .$mod .$gd;
            }
        }
    }
    if ( !class_exists( 'NewOrderData' ) ) {
        class NewOrderData
        {
            public $table = 'st_order_item_meta';
            public $st_upgrade_order = 0;
            public $allow_version = false;

            public function __construct()
            {
                add_action( 'st_save_order_item_meta', [ &$this, '_save_data' ], 10, 3 );
                add_action( 'st_booking_change_status', [ &$this, '_st_booking_change_status' ], 10, 3 );
                add_action( 'st_traveler_do_upgrade_table', [ &$this, '_action_check_upgrade_order' ] );
                add_action( 'after_setup_theme', [ &$this, '_check_table_order' ], 10 );
                add_action( 'after_setup_theme', [ &$this, '_check_upgrade_order' ], 50 );
                add_action( 'admin_init', [ $this, 'upgrade_order_2_0_3' ] );
            }

            public function upgrade_order_2_0_3()
            {
                $updated = get_option( 'st_upgrade_order_2_0_3', '' );
                if ( !$updated ) {
                    global $wpdb;
                    if ( TravelHelper::is_wpml() ) {
                        $sql = "UPDATE {$wpdb->prefix}st_order_item_meta AS ord
                            INNER JOIN {$wpdb->prefix}icl_translations AS translation ON (
                                ord.room_id = translation.element_id
                            )
                            SET ord.room_origin = translation.trid ";
                    } else {
                        $sql = "UPDATE {$wpdb->prefix}st_order_item_meta SET room_origin = room_id";
                    }

                    $wpdb->query( $sql );
                    update_option( 'st_upgrade_order_2_0_3', 'updated' );
                }
            }

            public function _action_check_upgrade_order()
            {
                $this->st_upgrade_order = 1;
                $this->allow_version    = true;
                $this->_check_table_order();
                $this->_check_upgrade_order();
            }

            public function _check_table_order()
            {
                $dbhelper = new DatabaseHelper( '2.0.3' );
                $dbhelper->setTableName( $this->table );
                $column = [
                    'id'                   => [
                        'type'           => 'bigint',
                        'length'         => 9,
                        'AUTO_INCREMENT' => true
                    ],
                    'order_item_id'        => [
                        'type'   => 'INT',
                        'length' => 255
                    ],
                    'type'                 => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'check_in'             => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'check_out'            => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'starttime'            => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'st_booking_post_type' => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'st_booking_id'        => [
                        'type' => 'INT'
                    ],
                    'duration'             => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'adult_number'         => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'child_number'         => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'infant_number'        => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'discount'             => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'room_id'              => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'room_num_search'      => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'check_in_timestamp'   => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'check_out_timestamp'  => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'status'               => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'wc_order_id'          => [
                        'type' => 'INT'
                    ],
                    'user_id'              => [
                        'type' => 'INT'
                    ],
                    'partner_id'           => [
                        'type' => 'INT'
                    ],
                    'created'              => [
                        'type' => 'date'
                    ],
                    'commission'           => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'total_order'          => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'origin_id'            => [
                        'type' => 'INT',
                    ],
                    'cancel_percent'       => [
                        'type' => 'INT',
                    ],
                    'cancel_refund'        => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'cancel_refund_status' => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'return_id'            => [
                        'type'   => 'INT',
                        'length' => 11
                    ],
                    'raw_data'             => [
                        'type' => 'text'
                    ],
                    'log_mail'             => [
                        'type'   => 'varchar',
                        'length' => 255
                    ],
                    'room_origin'          => [
                        'type'   => 'INT',
                        'length' => 11
                    ],
                ];
                $dbhelper->setDefaultColums( $column );
                $dbhelper->check_meta_table_is_working( 'neworder_table_version' );
            }

            public function _check_upgrade_order()
            {
                $complete = get_option( 'st_upgrade_order' );
                if ( !$complete || $complete == 0 || $this->st_upgrade_order == 1 || $this->allow_version ) {
                    $this->_duplicateOrder();
                }
            }

            static function isset_table()
            {
                global $wpdb;
                $table = $wpdb->prefix . 'st_order_item_meta';
                if ( $wpdb->get_var( "SHOW TABLES LIKE '$table'" ) != $table ) {
                    return false;
                }

                return true;
            }

            public function _save_data( $data = [], $order_item_id = false, $type = 'normal_booking' )
            {
                if ( is_array( $data ) && count( $data ) ) {
                    global $wpdb;
                    $jdatetime = new Jdf(); // Hamzeh

                    $table = $wpdb->prefix . $this->table;

                    $post_type_check = get_post_type( $data[ 'st_booking_id' ] );

                    $check_in             = isset( $data[ 'check_in' ] ) ? $data[ 'check_in' ] : null;
                    $check_out            = isset( $data[ 'check_out' ] ) ? $data[ 'check_out' ] : null;
                    $starttime            = isset( $data[ 'starttime' ] ) ? $data[ 'starttime' ] : null;
                    $st_booking_post_type = $data[ 'st_booking_post_type' ];
                    $st_booking_id        = $data[ 'st_booking_id' ];
                    $duration             = isset( $data[ 'duration' ] ) ? $data[ 'duration' ] : null;
                    $adult_number         = isset( $data[ 'adult_number' ] ) ? $data[ 'adult_number' ] : 0;
                    if ( $post_type_check == 'st_flight' ) {
                        $adult_number = ( isset( $data[ 'passenger' ] ) ) ? $data[ 'passenger' ] : 0;
                    }
                    $child_number    = isset( $data[ 'child_number' ] ) ? $data[ 'child_number' ] : 0;
                    $infant_number   = isset( $data[ 'infant_number' ] ) ? $data[ 'infant_number' ] : 0;
                    $discount        = isset( $data[ 'discount' ] ) ? $data[ 'discount' ] : null;
                    $room_id         = isset( $data[ 'room_id' ] ) ? $data[ 'room_id' ] : null;
                    $room_origin     = isset( $data[ 'room_id' ] ) ? TravelHelper::post_origin( $data[ 'room_id' ], 'hotel_room' ) : null;
                    $room_num_search = isset( $data[ 'room_num_search' ] ) ? $data[ 'room_num_search' ] : null;
                    $wc_order_id     = isset( $data[ 'wc_order_id' ] ) ? $data[ 'wc_order_id' ] : $order_item_id;
                    $user_id         = isset( $data[ 'user_id' ] ) ? $data[ 'user_id' ] : get_current_user_id();
                    $g_post          = get_post( $data[ 'st_booking_id' ] );
                    $partner_id      = $g_post->post_author;
                    if ( !empty( $data[ 'st_booking_post_type' ] ) && $data[ 'st_booking_post_type' ] == 'st_flight' ) {
                        $check_in            = date( 'm/d/Y', $data[ 'depart_date' ] );
                        $data[ 'check_in' ]  = date( 'm/d/Y', $data[ 'depart_date' ] );
                        $check_out           = !empty( $data[ 'return_date' ] ) ? date( 'm/d/Y', $data[ 'return_date' ] ) : null;
                        $data[ 'check_out' ] = !empty( $data[ 'return_date' ] ) ? date( 'm/d/Y', $data[ 'return_date' ] ) : null;
                        $data[ 'ori_price' ] = $data[ 'total_price' ];
                    }
                    $return_id = isset( $data[ 'return_id' ] ) ? $data[ 'return_id' ] : null;
                    $raw_data  = json_encode( $data );
                    
                    // Hamzeh
                    if ( !isset( $data[ 'check_in_timestamp' ] ) && isset( $data[ 'check_in' ] ) ) {
                        $check_in_timestamp = strtotime( $data[ 'check_in' ] );
                    } else {
                        $check_in_timestamp = $data[ 'check_in_timestamp' ];
                    }

                    // Hamzeh
                    if ( !isset( $data[ 'check_out_timestamp' ] ) && isset( $data[ 'check_out' ] ) ) {
                        $check_out_timestamp = strtotime( $data[ 'check_out' ] );
                    } else {
                        $check_out_timestamp = $data[ 'check_out_timestamp' ];
                    }
                    
                    // Hamzeh
                    $jalali_year = (int)substr($check_in, 0, 4);
                    if ($jalali_year >= 1402 && $jalali_year <= 2023) {
                        $gregorianDate = $jdatetime->jalali_to_gregorian(
                            (int)substr($check_in, 0, 4), // سال
                            (int)substr($check_in, 5, 2), // ماه
                            (int)substr($check_in, 8, 2), // روز
                            '/'
                        );

                        $check_in_timestamp = strtotime( $gregorianDate );
                    }

                    $jalali_year = (int)substr($check_out, 0, 4);
                    if ($jalali_year >= 1402 && $jalali_year <= 2023) {
                        $gregorianDate = $jdatetime->jalali_to_gregorian(
                            (int)substr($check_out, 0, 4), // سال
                            (int)substr($check_out, 5, 2), // ماه
                            (int)substr($check_out, 8, 2), // روز
                            '/'
                        );

                        $check_out_timestamp = strtotime( $gregorianDate );
                    }

                    $total_order = isset( $data[ 'ori_price' ] ) ? $data[ 'ori_price' ] : 0;
                    $commission  = isset( $data[ 'commission' ] ) ? $data[ 'commission' ] : 0;

                    if ( !empty( $data[ 'booking_fee_price' ] ) ) {
                        $total_order = $total_order + $data[ 'booking_fee_price' ];
                    }
                    global $sitepress;
                    if ( $sitepress ) {
                        $post_type = get_post_type( $st_booking_id );
                        if ( $post_type == 'st_hotel' ) {
                            $post_type = 'hotel_room';
                            $id        = $room_id;
                        } else {
                            $id = $st_booking_id;
                        }
                        $lang_code = $sitepress->get_default_language();
                        $origin_id = icl_object_id( $id, $post_type, true, $lang_code );
                    } else {
                        $origin_id = $st_booking_id;
                    }
                    if(st()->get_option('enable_email_confirm_for_customer','on') === 'off'){
                        $status_order = 'pending';
                    } else {
                        $status_order = 'incomplete';
                    }

                    $persianDate = get_the_date( 'Y-m-d', $wc_order_id );
                    $jalali_year = (int)substr($persianDate, 0, 4);
                    if ($jalali_year >= 1402 && $jalali_year <= 2023) {
                        $gregorianDate = $jdatetime->jalali_to_gregorian(
                            (int)substr($persianDate, 0, 4), // سال
                            (int)substr($persianDate, 5, 2), // ماه
                            (int)substr($persianDate, 8, 2), // روز
                            '-'
                        );
                    } else {
                        $gregorianDate = $persianDate;
                    }
                    

                    $value = [
                        'order_item_id'        => $order_item_id,
                        'type'                 => $type,
                        'check_in'             => $check_in,
                        'check_out'            => $check_out,
                        'starttime'            => $starttime,
                        'check_in_timestamp'   => $check_in_timestamp,
                        'check_out_timestamp'  => $check_out_timestamp,
                        'st_booking_post_type' => $st_booking_post_type,
                        'st_booking_id'        => $st_booking_id,
                        'user_id'              => $user_id,
                        'partner_id'           => $partner_id,
                        'discount'             => $discount,
                        'duration'             => $duration,
                        'adult_number'         => $adult_number,
                        'child_number'         => $child_number,
                        'infant_number'        => $infant_number,
                        'room_id'              => $room_id,
                        'room_origin'          => $room_origin,
                        'room_num_search'      => $room_num_search,
                        'wc_order_id'          => $wc_order_id,
                        'status'               => $status_order,
                        'created'              => $gregorianDate,
                        'total_order'          => STPrice::getTotal(),
                        'commission'           => $commission,
                        'origin_id'            => $origin_id,
                        'return_id'            => $return_id,
                        'raw_data'             => $raw_data
                    ];

                    //Update data to number_booked id
	                AvailabilityHelper::syncAvailabilityOrder($value);

                    $wpdb->insert( $table, $value );
                }
            }

            public function _st_booking_change_status( $status, $order_id, $booking_type )
            {
                if ( !$this->isset_table() ) return false;

                global $wpdb;
                $table = $wpdb->prefix . $this->table;

                $data = [
                    'status' => $status
                ];

                $where = [
                    'order_item_id' => intval( $order_id )
                ];
                $rs    = $wpdb->update( $table, $data, $where );
            }

            public function _duplicateOrder()
            {
                global $wpdb;
                $table = $wpdb->prefix . $this->table;
                if ( $this->allow_version ) {
                    if ( $this->isset_table() ) {
                        $this->_deleteTable();
                        $this->_check_table_order();
                    }
                }

                $list_normal = $this->_getOldData();

                if ( is_array( $list_normal ) && count( $list_normal ) ) {
                    foreach ( $list_normal as $key => $val ) {
                        $order_item_id        = $key;
                        $type                 = 'normal_booking';
                        $check_in             = isset( $val[ 'check_in' ] ) ? date( 'm/d/Y', strtotime( $val[ 'check_in' ] ) ) : '';
                        $check_out            = isset( $val[ 'check_out' ] ) ? date( 'm/d/Y', strtotime( $val[ 'check_out' ] ) ) : '';
                        $st_booking_post_type = isset( $val[ 'st_booking_post_type' ] ) ? $val[ 'st_booking_post_type' ] : '';
                        $st_booking_id        = isset( $val[ 'st_booking_id' ] ) ? $val[ 'st_booking_id' ] : '';
                        $duration             = isset( $val[ 'duration' ] ) ? $val[ 'duration' ] : '';
                        $adult_number         = isset( $val[ 'adult_number' ] ) ? $val[ 'adult_number' ] : 0;
                        $child_number         = isset( $val[ 'child_number' ] ) ? $val[ 'child_number' ] : 0;
                        $infant_number        = isset( $val[ 'infant_number' ] ) ? $val[ 'infant_number' ] : 0;
                        $discount             = isset( $val[ 'discount' ] ) ? $val[ 'discount' ] : '';
                        $room_id              = isset( $val[ 'room_id' ] ) ? $val[ 'room_id' ] : '';
                        $room_num_search      = isset( $val[ 'room_num_search' ] ) ? $val[ 'room_num_search' ] : '';
                        $check_in_timestamp   = isset( $val[ 'check_in_timestamp' ] ) ? $val[ 'check_in_timestamp' ] : strtotime( $check_in );
                        $check_out_timestamp  = isset( $val[ 'check_out_timestamp' ] ) ? $val[ 'check_out_timestamp' ] : strtotime( $check_out );
                        $status               = isset( $val[ 'status' ] ) ? $val[ 'status' ] : 'canceled';
                        $wc_order_id          = $order_item_id;
                        $user_id              = isset( $val[ 'user_id' ] ) ? $val[ 'user_id' ] : 1;
                        $g_post               = get_post( $st_booking_id );
                        $partner_id           = $g_post ? $g_post->post_author : '';
                        $commission           = isset( $val[ 'commission' ] ) ? $val[ 'commission' ] : 0;
                        if ( $type == 'normal_booking' ) {
                            $total_order       = get_post_meta( $wc_order_id, 'total_price', true );
                            $booking_fee_price = get_post_meta( $wc_order_id, 'booking_fee_price', true );
                            if ( !empty( $booking_fee_price ) ) {
                                $total_order = $total_order + $booking_fee_price;
                            }
                        }
                        if ( $type == 'woocommerce' ) {
                            $total_order = get_post_meta( $wc_order_id, '_order_total', true );
							if ( empty( $total_order ) ) {
								global $wpdb;
								$querystr = "SELECT total_amount
											FROM  " . $wpdb->prefix . "wc_orders
											WHERE
											id = '{$wc_order_id}'
											";
								$total_order = $wpdb->get_row( $querystr, OBJECT )->total_amount;
							}
                        }
                        global $sitepress;
                        if ( $sitepress ) {
                            $post_type = get_post_type( $st_booking_id );
                            if ( $post_type == 'st_hotel' ) {
                                $post_type = 'hotel_room';
                                $id        = $room_id;
                            } else {
                                $id = $st_booking_id;
                            }
                            $lang_code = $sitepress->get_default_language();
                            $origin_id = icl_object_id( $id, $post_type, true, $lang_code );
                        } else {
                            $origin_id = $st_booking_id;
                        }
                        $data = [
                            'order_item_id'        => $order_item_id,
                            'type'                 => $type,
                            'check_in'             => $check_in,
                            'check_out'            => $check_out,
                            'st_booking_post_type' => $st_booking_post_type,
                            'st_booking_id'        => $st_booking_id,
                            'duration'             => $duration,
                            'adult_number'         => $adult_number,
                            'child_number'         => $child_number,
                            'infant_number'        => $infant_number,
                            'discount'             => $discount,
                            'room_id'              => $room_id,
                            'room_num_search'      => $room_num_search,
                            'check_in_timestamp'   => $check_in_timestamp,
                            'check_out_timestamp'  => $check_out_timestamp,
                            'status'               => $status,
                            'wc_order_id'          => $wc_order_id,
                            'user_id'              => $user_id,
                            'partner_id'           => $partner_id,
                            'created'              => get_the_date( 'Y-m-d', $order_item_id ),
                            'total_order'          => STPrice::getTotal(),
                            'commission'           => $commission,
                            'origin_id'            => $origin_id
                        ];

                        $wpdb->insert( $table, $data );
                    }
                }

                $list_woo = $this->_getOldDataWoo();
                if ( is_array( $list_woo ) && count( $list_woo ) ) {
                    foreach ( $list_woo as $key => $val ) {
                        $order_item_id        = $key;
                        $type                 = 'woocommerce';
                        $check_in             = isset( $val[ '_st_check_in' ] ) ? date( 'm/d/Y', strtotime( $val[ '_st_check_in' ] ) ) : '';
                        $check_out            = isset( $val[ '_st_check_out' ] ) ? date( 'm/d/Y', strtotime( $val[ '_st_check_out' ] ) ) : '';
                        $st_booking_post_type = isset( $val[ '_st_st_booking_post_type' ] ) ? $val[ '_st_st_booking_post_type' ] : '';
                        $st_booking_id        = isset( $val[ '_st_st_booking_id' ] ) ? $val[ '_st_st_booking_id' ] : '';
                        $duration             = isset( $val[ '_st_duration' ] ) ? $val[ '_st_duration' ] : '';
                        $adult_number         = isset( $val[ '_st_adult_number' ] ) ? $val[ '_st_adult_number' ] : 0;
                        $child_number         = isset( $val[ '_st_child_number' ] ) ? $val[ '_st_child_number' ] : 0;
                        $infant_number        = isset( $val[ '_st_infant_number' ] ) ? $val[ '_st_infant_number' ] : 0;
                        $discount             = isset( $val[ '_st_discount' ] ) ? $val[ '_st_discount' ] : '';
                        $room_id              = isset( $val[ '_st_room_id' ] ) ? $val[ '_st_room_id' ] : '';
                        $room_num_search      = isset( $val[ '_st_room_num_search' ] ) ? $val[ '_st_room_num_search' ] : '';
                        $check_in_timestamp   = isset( $val[ '_st_check_in_timestamp' ] ) ? $val[ '_st_check_in_timestamp' ] : strtotime( $check_in );
                        $check_out_timestamp  = isset( $val[ '_st_check_out_timestamp' ] ) ? $val[ '_st_check_out_timestamp' ] : strtotime( $check_out );
                        $status               = isset( $val[ 'order_id' ] ) ? get_post_status( $val[ 'order_id' ] ) : 'trash';
                        $wc_order_id          = isset( $val[ 'order_id' ] ) ? $val[ 'order_id' ] : '';
                        $user_id              = isset( $val[ '_st_user_id' ] ) ? $val[ '_st_user_id' ] : 1;
                        $g_post               = get_post( $st_booking_id );
                        $partner_id           = $g_post ? $g_post->post_author : '';
                        $commission           = isset( $val[ 'st_commission' ] ) ? $val[ 'st_commission' ] : 0;
                        if ( $type == 'normal_booking' ) {
                            $total_order       = get_post_meta( $wc_order_id, 'total_price', true );
                            $booking_fee_price = get_post_meta( $wc_order_id, 'booking_fee_price', true );
                            if ( !empty( $booking_fee_price ) ) {
                                $total_order = $total_order + $booking_fee_price;
                            }
                        }
                        if ( $type == 'woocommerce' ) {
                            $total_order = get_post_meta( $wc_order_id, '_order_total', true );
							if ( empty( $total_order ) ) {
								global $wpdb;
								$querystr = "SELECT total_amount
											FROM  " . $wpdb->prefix . "wc_orders
											WHERE
											id = '{$wc_order_id}'
											";
								$total_order = $wpdb->get_row( $querystr, OBJECT )->total_amount;
							}
                        }
                        global $sitepress;
                        if ( $sitepress ) {
                            $post_type = get_post_type( $st_booking_id );
                            if ( $post_type == 'st_hotel' ) {
                                $post_type = 'hotel_room';
                                $id        = $room_id;
                            } else {
                                $id = $st_booking_id;
                            }
                            $lang_code = $sitepress->get_default_language();
                            $origin_id = icl_object_id( $id, $post_type, true, $lang_code );
                        } else {
                            $origin_id = $st_booking_id;
                        }
                        $data = [
                            'order_item_id'        => $order_item_id,
                            'type'                 => $type,
                            'check_in'             => $check_in,
                            'check_out'            => $check_out,
                            'st_booking_post_type' => $st_booking_post_type,
                            'st_booking_id'        => $st_booking_id,
                            'duration'             => $duration,
                            'adult_number'         => $adult_number,
                            'child_number'         => $child_number,
                            'infant_number'        => $infant_number,
                            'discount'             => $discount,
                            'room_id'              => $room_id,
                            'room_num_search'      => $room_num_search,
                            'check_in_timestamp'   => $check_in_timestamp,
                            'check_out_timestamp'  => $check_out_timestamp,
                            'status'               => $status,
                            'wc_order_id'          => $wc_order_id,
                            'user_id'              => $user_id,
                            'partner_id'           => $partner_id,
                            'created'              => get_the_date( 'Y-m-d', $wc_order_id ),
                            'total_order'          => STPrice::getTotal(),
                            'commission'           => $commission,
                            'origin_id'            => $origin_id
                        ];

                        $wpdb->insert( $table, $data );
                    }
                }
                update_option( 'st_upgrade_order', 1 );
            }

            public function _deleteTable()
            {
                global $wpdb;
                $table = $wpdb->prefix . $this->table;
                $wpdb->query( "DROP TABLE {$table}" );
            }

            public function _getOldData()
            {
                global $wpdb;

                $sql     = "SELECT ID, meta_key, meta_value
			FROM {$wpdb->prefix}posts, {$wpdb->prefix}postmeta
			WHERE {$wpdb->prefix}posts.ID = {$wpdb->prefix}postmeta.post_id
			AND post_type = 'st_order'
			AND (
			meta_key = 'st_booking_post_type'
			or meta_key = 'st_booking_id'
			or meta_key = 'check_in_timestamp'
			or meta_key = 'check_out_timestamp'
			or meta_key = 'check_in'
			or meta_key = 'check_out'
			or meta_key = 'duration'
			or meta_key = 'room_id'
			or meta_key = 'status'
			or meta_key = 'room_num_search'
			or meta_key = 'room_id'
			or meta_key = 'adult_number'
			or meta_key = 'child_number'
			or meta_key = 'infant_number'
			or meta_key = 'discount'
			or meta_key = 'user_id'
			or meta_key = 'commission'
			)
			ORDER BY ID";
                $results = $wpdb->get_results( $sql );
                $list    = [];
                if ( is_array( $results ) && count( $results ) ) {
                    foreach ( $results as $val ) {
                        $list[ $val->ID ][ $val->meta_key ] = $val->meta_value;
                    }
                }

                return $list;
            }

            public function _getOldDataWoo()
            {
                global $wpdb;
                $list   = [];
                $table  = $wpdb->prefix . 'woocommerce_order_items';
                $table2 = $wpdb->prefix . 'woocommerce_order_itemmeta';
                if ( ( $wpdb->get_var( "SHOW TABLES LIKE '$table'" ) != $table ) || ( $wpdb->get_var( "SHOW TABLES LIKE '$table2'" ) != $table2 ) ) {
                    return $list;
                }
                $sql = "SELECT
			{$wpdb->prefix}woocommerce_order_items.order_item_id, {$wpdb->prefix}woocommerce_order_items.order_id,  {$wpdb->prefix}woocommerce_order_itemmeta.meta_key, {$wpdb->prefix}woocommerce_order_itemmeta.meta_value
			FROM {$wpdb->prefix}woocommerce_order_items, {$wpdb->prefix}woocommerce_order_itemmeta
			WHERE {$wpdb->prefix}woocommerce_order_items.order_item_id = {$wpdb->prefix}woocommerce_order_itemmeta.order_item_id
			AND order_item_type = 'line_item'
			AND(
			{$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_adult_number'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_child_number'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_infant_number'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_discount'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_duration'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_check_in'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_check_out'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_st_booking_post_type'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_st_booking_id'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_user_id'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_check_in_timestamp'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_check_out_timestamp'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_room_num_search'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_room_id'
			or {$wpdb->prefix}woocommerce_order_itemmeta.meta_key = '_st_commission'
			)
			ORDER BY {$wpdb->prefix}woocommerce_order_items.order_item_id";

                $results = $wpdb->get_results( $sql );
                if ( is_array( $results ) && count( $results ) ) {
                    foreach ( $results as $val ) {
                        $list[ $val->order_item_id ][ 'order_id' ]     = $val->order_id;
                        $list[ $val->order_item_id ][ $val->meta_key ] = $val->meta_value;
                    }
                }

                return $list;
            }
        }

        new NewOrderData();
    }
?>