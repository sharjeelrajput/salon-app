import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, } from "react-native";
import {ChatScreenStyle} from '../../styles/index';
import { useSelector } from "react-redux";
import images from '../../index';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconL from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/Foundation';
import { colorsset } from "../../utils";

const ChartScreenset = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <View style={[ChatScreenStyle.minstyleviewphotograpgy, {backgroundColor: colorsset.BackgroundColorScreen}]}>
       <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={ChatScreenStyle.minflexview}>
            <View style={ChatScreenStyle.minviewsigninscreen}>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={ChatScreenStyle.chartviewsetbgcolor}>
                    <Text style={ChatScreenStyle.textcolormessage}>Hi, I would like to get a haircut please.</Text>
                    <Text style={ChatScreenStyle.textcolormessagetwoset}>03:16</Text>
                  </View>
                </View>
                <Text style={ChatScreenStyle.datesndtimecolor}>23 Dec,2022</Text>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucentertwo}>
                  <View style={ChatScreenStyle.leftimage}>
                    <Image source={images.Chat_BarberTwo} style={ChatScreenStyle.seimagstyleendcall} resizeMode={'cover'} />
                  </View>
                  <View style={ChatScreenStyle.messageminviewowner}>
                    <Text style={ChatScreenStyle.textcolormessage}>Of course, do you have a specific style in mind?</Text>
                    <View style={ChatScreenStyle.flexcheckset}>
                      <View>
                        <Text style={ChatScreenStyle.textcolormessagetwosettwo}>03:18</Text>
                      </View>
                      <View style={ChatScreenStyle.setrighticonviewstyle}>
                        <IconL color="white" name="check" />
                        <IconL color="white" style={ChatScreenStyle.seticonpotion} name="check" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.marginbottomsetspace}>
                  <View style={ChatScreenStyle.flexrowjucenter}>
                    <View style={ChatScreenStyle.chartviewsetbgcolor}>
                      <Text style={ChatScreenStyle.textcolormessage}>Yeah, I was thinking of something short on the sides and a little longer on top.</Text>
                      <Text style={ChatScreenStyle.textcolormessagetwoset}>03:19</Text>
                    </View>
                  </View>
                  <Text style={ChatScreenStyle.datesndtimecolor}>23 Dec,2022</Text>
                </View>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucentertwo}>
                  <View style={ChatScreenStyle.leftimage}>
                    <Image source={images.Chat_BarberTwo} style={ChatScreenStyle.seimagstyleendcall} resizeMode={'cover'} />
                  </View>
                  <View style={ChatScreenStyle.messageminviewowner}>
                    <Text style={ChatScreenStyle.textcolormessage}>Got it, any specific length or hair type you prefer?</Text>
                    <View style={ChatScreenStyle.flexcheckset}>
                      <View>
                        <Text style={ChatScreenStyle.textcolormessagetwosettwo}>03:20</Text>
                      </View>
                      <View style={ChatScreenStyle.setrighticonviewstyle}>
                        <IconL color="white" name="check" />
                        <IconL color="white" style={ChatScreenStyle.seticonpotion} name="check" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.marginbottomsetspace}>
                  <View style={ChatScreenStyle.flexrowjucenter}>
                    <View style={ChatScreenStyle.chartviewsetbgcolor}>
                      <Text style={ChatScreenStyle.textcolormessage}>I have thick, curly hair, so I usually like to keep it a bit shorter on the sides to manage the curls.</Text>
                      <Text style={ChatScreenStyle.textcolormessagetwoset}>03:20</Text>
                    </View>
                  </View>
                  <Text style={ChatScreenStyle.datesndtimecolor}>23 Dec,2022</Text>
                </View>
                {/* <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={ChatScreenStyle.seticonrevirview}>
                    <View style={ChatScreenStyle.leftimagelike}>
                      <IconM name="like" color={'#ffcc5b'} size={55} />
                    </View>
                  </View>
                </View> */}
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.seticonrevirview}>
                  <View style={ChatScreenStyle.flexrowjucentertwo}>
                    <View style={ChatScreenStyle.leftimage}>
                      <Image source={images.Chat_BarberTwo} style={ChatScreenStyle.seimagstyleendcall} resizeMode={'cover'} />
                    </View>
                    <View style={ChatScreenStyle.messageminviewowner}>
                      <Text style={ChatScreenStyle.textcolormessage}>Typing...</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={ChatScreenStyle.postionabsoluteview}>
        <View style={ChatScreenStyle.textmessageview}>
          <View style={ChatScreenStyle.flexrowsetsendmesasagew}>
            <View>
              <TextInput
                style={ChatScreenStyle.textinputborderbottom}
                placeholder="Write a reply..."
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={ChatScreenStyle.flexrowimaginations}>
              <TouchableOpacity>
                <IconP name="grin" size={25} />
              </TouchableOpacity>
              <TouchableOpacity style={ChatScreenStyle.setmarginrightlikeicon}>
                <IconO name="send" color={colorrdata} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ChartScreenset;
