import React, { useState, useEffect } from 'react'
import { Text, View,Dimensions} from 'react-native';
import styles from './styles';
import {CustomStatusBar, CustomHeader} from '../../../components';
const screenWidth = Dimensions.get('window').width;
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../../actions/user-actions-types';
 import ProgressLoader from 'rn-progress-loader';
interface ApprovalScreenProps { navigation: any }
const privacyPolicy = (props: ApprovalScreenProps) => {
    const [PrivacyPolicy, setprivacyPolicy] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const renderIndicator = () => {
        return (
          <View style={{}}>
            <ProgressLoader
              visible={true}
              isModal={true} isHUD={true}
               hudColor={"#4B2A6A"}
              style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
              color={"white"} />
          </View>
        );
      }
    
 useEffect(() => {
        getPrivacyData();
        
     }, []);


      const getdataPrivacyKey = async (result) => {
        var privacy = [];
        result.results.map((element: any) => {
          let obj = {
            id:element.id,
            page_name: element.page_name,
            page_content: element.page_content,
            is_active: element.is_active,
            updated_on: element.updated_on,
            created_on: element.created_on,
            is_deleted: element.is_deleted,
           }
          privacy.push(obj);
          
        });
        setprivacyPolicy(privacy)
 
    //console.log('datatatta',privacy)

  }
 const getPrivacyData = async () => {
        
        setLoading(true);
        dispatch(
          userActions.getPrivacyData({
           
            callback: ({ result, error }) => {
    
              if (result) {
                console.log(
                  'after result Privacy dataaaaa',
                  JSON.stringify(result, undefined, 2),
                  getdataPrivacyKey(result)
                );
                 setLoading(false);
              }
              if (!error) {
                console.warn(JSON.stringify(error, undefined, 2));
               setLoading(false);
                
              } else {
                 setLoading(false);
                console.warn(JSON.stringify(error, undefined, 2));
              }
            },
          }),
        );
      }
return (
        <View style={styles.container}> 
            <CustomStatusBar />
            <CustomHeader Title={'Privacy Policy'} />
            {isLoading && renderIndicator()}
              <View style={styles.textcontainer}>
                   {PrivacyPolicy.map((user) => (
                       <Text style={styles.text}>{user.page_content}</Text>
                     ))}
                                       
                
            </View>
             
         </View>
    );
};

export default privacyPolicy;