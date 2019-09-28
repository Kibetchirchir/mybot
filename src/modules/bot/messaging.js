import axios from 'axios';
import request from 'request';
import dotenv from 'dotenv';

dotenv.config();


const { token } = process.env;

function sleep(milliseconds) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function sendButtonMessage(sender, text) {
  const messageData = {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text,
        buttons: [
          {
            type: 'postback',
            title: 'Account openning(newCustomer)',
            payload: 'qali'
          },
          {
            type: 'postback',
            title: 'service Request (returning customer)',
            payload: 'exists'
          },
          {
            type: 'postback',
            title: 'Enquiry',
            payload: 'gen'
          }
        ]
      }
    }
  };
  sendRequest(sender, messageData);
}
function sendButtonStatement(sender, text) {
  const messageData = {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text,
        buttons: [
          {
            type: 'postback',
            title: 'Hard copy',
            payload: 'hard'
          },
          {
            type: 'postback',
            title: 'Soft Copy',
            payload: 'soft'
          }
        ]
      }
    }
  };
  sendRequest(sender, messageData);
}

function sendButtonGen(sender, text) {
  const messageData = {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text,
        buttons: [
          {
            type: 'postback',
            title: 'Branch/ATM locator',
            payload: 'locate'
          },
          {
            type: 'postback',
            title: 'Pay Merchant',
            payload: 'pay'
          },
          {
            type: 'postback',
            title: 'Exchange Rate',
            payload: 'kibet'
          }

        ]
      }
    }
  };
  sendRequest(sender, messageData);
}

function sendButtonMessage2(sender, text) {
  const messageData = {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text,
        buttons: [
          {
            type: 'postback',
            title: 'Account Request',
            payload: 'acc'
          },
          {
            type: 'postback',
            title: 'Transactions',
            payload: 'trans'
          },
          {
            type: 'postback',
            title: 'General service',
            payload: 'gen'
          },

        ]
      }
    }
  };
  sendRequest(sender, messageData);
}

function sendButtonCheque(sender, text) {
  const messageData = {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text,
        buttons: [
          {
            type: 'postback',
            title: '25 leve',
            payload: '25l'
          },
          {
            type: 'postback',
            title: '50 leve',
            payload: '25l'
          },

        ]
      }
    }
  };
  sendRequest(sender, messageData);
}

function quickReply(sender) {
  const messageData = {
    text: 'Here is your phone number if not shown that means you dont have a number on your profile.You can enter your number from the text area starting with 254',
    quick_replies: [
      {
        content_type: 'user_phone_number'
      },
      {
        content_type: 'text',
        title: 'cancel',
        payload: 'cancel',
      }
    ]
  };
  sendRequest(sender, messageData);
}

function quickReplyLoc(sender) {
  const messageData = {
    text: 'Please click on the button below and share your location or type on the text field',
    quick_replies: [
      {
        content_type: 'location'
      },
      {
        content_type: 'text',
        title: 'cancel',
        payload: 'cancel',
      }
    ]
  };
  sendRequest(sender, messageData);
}

function quickReplyAcc1(sender) {
  const messageData = {
    text: 'Select your response swipe left for more replies',
    quick_replies: [
      {
        content_type: 'text',
        title: 'check balance',
        payload: 'balance',
      },
      {
        content_type: 'text',
        title: 'request Ministatement',
        payload: 'mini',
      },
      {
        content_type: 'text',
        title: 'request statement',
        payload: 'statement',
      },
      {
        content_type: 'text',
        title: 'Cheque book request',
        payload: 'book',
      },
      {
        content_type: 'text',
        title: 'cancel',
        payload: 'cancel',
      }
    ]
  };
  sendRequest(sender, messageData);
}

function quickReplyAcc(sender, text) {
  const messageData = {
    text,
    quick_replies: [
      {
        content_type: 'text',
        title: 'Account opening(new customer)',
        payload: 'balance',
      },
      {
        content_type: 'text',
        title: 'service request(returning customer)',
        payload: 'mini',
      },
      {
        content_type: 'text',
        title: 'Enquiries',
        payload: 'book',
      }
    ]
  };
  sendRequest(sender, messageData);
}
function quickReplyOTP(sender, text) {
  const messageData = {
    text,
    quick_replies: [
      {
        content_type: 'text',
        title: 'Resend OTP',
        payload: 'Resend OTP',
      }
    ]
  };
  sendRequest(sender, messageData);
}

function quickReplyPay(sender) {
  const messageData = {
    text: 'Select your response swipe left for more replies',
    quick_replies: [
      {
        content_type: 'text',
        title: 'Nairobi water services',
        payload: 'water',
      },
      {
        content_type: 'text',
        title: 'buy airtime services',
        payload: 'water',
      },
      {
        content_type: 'text',
        title: 'Nairobi county services',
        payload: 'water',
      },
      {
        content_type: 'text',
        title: 'Other services',
        payload: 'water',
      }
    ]
  };
  sendRequest(sender, messageData);
}

function sendQuickTrans(sender) {
  const messageData = {
    text: 'Please select your response bellow',
    quick_replies: [
      {
        content_type: 'text',
        title: 'deposit',
        payload: 'chir',
      },
      {
        content_type: 'text',
        title: 'Transfer to annother Account',
        payload: 'fer',
      }
    ]
  };
  sendRequest(sender, messageData);
}


function sendQuickRead(sender, text) {
  const messageData = {
    text,
    quick_replies: [
      {
        content_type: 'text',
        title: 'ready',
        payload: 'ready',
      },
      {
        content_type: 'text',
        title: 'Not now',
        payload: 'Not now',
      }
    ]
  };
  sendRequest(sender, messageData);
}
function sendQuickDep(sender) {
  const messageData = {
    text: 'We also have Chequebooks and Debit Card for your account which if requested can be picked form a branch of your convinience, would you like to order for any of them',
    quick_replies: [
      {
        content_type: 'text',
        title: 'cheque.',
        payload: 'cheque.',
      },
      {
        content_type: 'text',
        title: 'debit card',
        payload: 'debit card',
      },
      {
        content_type: 'text',
        title: 'not now',
        payload: 'not now',
      }
    ]
  };
  sendRequest(sender, messageData);
}
function sendQuickmind(sender) {
  const messageData = {
    text: 'Do you mind if i took you through some of our product that you may find useful',
    quick_replies: [
      {
        content_type: 'text',
        title: 'I dont mind',
        payload: 'I dont mind',
      },
      {
        content_type: 'text',
        title: 'not now',
        payload: 'not now',
      }
    ]
  };
  sendRequest(sender, messageData);
}
function sendQuickPush(sender) {
  const messageData = {
    text: `I have confirmed your details, Your new acount is: ${sender}, to activate your account you are required to make an initial deposit of atlist 100`,
    quick_replies: [
      {
        content_type: 'text',
        title: 'Load Ksh.100 now',
        payload: 'load Ksh.100 now',
      },
      {
        content_type: 'text',
        title: 'Load more than Ksh.100',
        payload: 'Load more than Ksh.100',
      },
      {
        content_type: 'text',
        title: 'load later',
        payload: 'load later',
      }
    ]
  };
  sendRequest(sender, messageData);
}
function sendQuickcheq(sender, text) {
  const messageData = {
    text,
    quick_replies: [
      {
        content_type: 'text',
        title: 'yes',
        payload: 'yes',
      },
      {
        content_type: 'text',
        title: 'no',
        payload: 'no',
      }
    ]
  };
  sendRequest(sender, messageData);
}

function sendQuickbal(sender, text) {
  const messageData = {
    text,
    quick_replies: [
      {
        content_type: 'text',
        title: 'okay',
        payload: 'okay',
      },
      {
        content_type: 'text',
        title: 'not now',
        payload: 'not now',
      }
    ]
  };
  sendRequest(sender, messageData);
}
// Debit
function sendQuickdebit(sender) {
  const messageData = {
    text: 'I have placed an order for you and you can can collect it from Harambee avenue in three days.Would you like me to remind you',
    quick_replies: [
      {
        content_type: 'text',
        title: 'yes',
        payload: 'yes',
      },
      {
        content_type: 'text',
        title: 'no',
        payload: 'no',
      }
    ]
  };
  sendRequest(sender, messageData);
}
// Yes or no12
function sendQuickYes(sender) {
  const messageData = {
    text: 'Great, welcome to National Bank, is it your first account with us?',
    quick_replies: [
      {
        content_type: 'text',
        title: 'yes',
        payload: 'yes12',
      },
      {
        content_type: 'text',
        title: 'no',
        payload: 'yes12',
      }
    ]
  };
  sendRequest(sender, messageData);
}

function sendRequest(sender, messageData) {
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: token },
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: messageData,
    }
  }, (error, response, body) => {
    if (error) {
    } else if (response.body.error) {
      // TODO it
    }
  });
}

function sendText(sender, text) {
  const messageData = { text };
  sendRequest(sender, messageData);
}
function sendImageMessage(sender) {
  const messageData = {
    attachment: {
      type: 'image',
      payload: {
        url: 'http://www.messenger-rocks.com/image.jpg',
      }
    }
  };
  sendRequest(sender, messageData);
}
function sendGenericMessage(sender) {
  const messageData = {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'generic',
        elements: [
          {
            title: 'Nouveta!',
            image_url: 'https://petersfancybrownhats.com/company_image.png',
            subtitle: 'We have the right hat for everyone.',
            default_action: {
              type: 'web_url',
              url: 'https://petersfancybrownhats.com/view?item=103',
              webview_height_ratio: 'tall',
            },
            buttons: [
              {
                type: 'web_url',
                url: 'https://petersfancybrownhats.com',
                title: 'View Website'
              }, {
                type: 'postback',
                title: 'Start Chatting',
                payload: 'DEVELOPER_DEFINED_PAYLOAD'
              }
            ]
          }
        ]
      }
    }
  };
  sendRequest(sender, messageData);
}

function decideMessage(sender, text1) {
  const text = text1.toLowerCase();
  const service = text;
  if (text.includes('get started')) {
    axios.get(`https://graph.facebook.com/${sender}?fields=first_name,last_name,profile_pic&access_token=${token}`)
      .then((response) => {
        const data = response.status;
        const name = response.data.first_name;
        sendButtonMessage(sender, `Hi ${name},☺ I am Kunta and will be your agent today, how may I help you?`);
      })
      .catch((error) => {
        // TODO add bugsnag
      });
  } else if (text === 'hi') {
    axios.get(`https://graph.facebook.com/${sender}?fields=first_name,last_name,profile_pic&access_token=${token}`)
      .then((response) => {
        const name = response.data.first_name;
        sendButtonMessage(sender, `Hi ${name},☺ I am Kunta and will be your agent today, how may I help you?`);
      })
      .catch((error) => {
        // TODO bugsnag the error
      });
  } else if (text.includes('exists')) {
    sendText(sender, '😞Sorry notice this was your first time here. Kindly provide me with your id Number');
    axios.get(`${urlToUse}/api/postmessage/${sender}/idln/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (text.includes('link')) {
    axios.get(`${urlToUse}/api/postmessage/${sender}/ID/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
    sendText(sender, 'Enter you phone number beggining with z eg , Z0715428709');
  } else if (text.includes('z211')) {
    axios.get(`${urlToUse}/api/link/${sender}/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
    sendText(sender, 'Message has been sent to your phone');
  } else if (text.includes('//')) {
    axios.get(`${urlToUse}/api/otp/${sender}/${text}`)
      .then((response) => {
        const data = response.status;
        const lee = response.data.status;
        if (lee === '200') {
          sendText(sender, 'Account successfully linked');
          sendButtonMessage2(sender, 'Choose the service youll like to use');
        } else {
          sendText(sender, 'Wrong OTP. Contact our customer care for assistant');
        }
      })
      .catch((error) => {
      });
  } else if (text.includes('acc')) {
    quickReplyAcc1(sender);
  } else if (text.includes('check')) {
    axios.get(`${urlToUse}/api/postmessage/${sender}/balance/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
    sendQuickbal(sender, 'No problem, but first i need to confirm your details  kindly provide me with the following \n 1.Your National ID');
  } else if (text.includes('okay')) {
    axios.get(`${urlToUse}/api/postmessage/${sender}/balanceco/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
    sendText(sender, 'Kindly provide me with your id number');
  } else if (text.includes('mini')) {
    sendText(sender, 'Please choose the Account you would want to check the balance \n 1 acc 543*******325\n 2 acc 543***********125');
    axios.get(`${urlToUse}/api/postmessage/${sender}/mini1/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (text.includes('statement')) {
    sendButtonStatement(sender, 'Do you want a');
  } else if (text.includes('hard')) {
    sendText(sender, "We've received your request we will contact you once its ready. Thank you");

    axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
      .then((response) => {
        const data = response.status;
        sendQuickcheq(sender, 'Anything else you would like my assitance on?');
      })
      .catch((error) => {
      });
  } else if (text.includes('soft')) {
    sendText(sender, 'You will receive your statement on your email registered to us');
    sendQuickcheq(sender, 'Anything else you would like my assitance on?');
    axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (text.includes('book')) {
    sendButtonCheque(sender, 'How many level');
  } else if (text.includes('25l')) {
    sendText(sender, "Thank you We've received your request once its ready we'll inform you . Thank you");
    sendQuickcheq(sender, 'Anything else you would like my assitance on?');
    axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (text.includes('trans')) {
    sendQuickTrans(sender, 'Choose the service youll like to use');
  } else if (text.includes('pay')) {
    quickReplyPay(sender);
    axios.get(`${urlToUse}/api/postmessage/${sender}/deposit/${text}`)
      .then((response) => {
      })
      .catch((error) => {
      });
  } else if (text.includes('//')) {
    axios.get(`${urlToUse}/api/postmessage/${sender}/deposit/${text}`)
      .then((response) => {
      })
      .catch((error) => {
      });
    quickReply(sender);
  } else if (text.includes('deposit')) {
    axios.get(`${urlToUse}/api/postmessage/${sender}/deposit/${text}`)
      .then((response) => {
      })
      .catch((error) => {
      });
    quickReply(sender);
  } else if (text.includes('//')) {
    axios.get(`${urlToUse}/api/postmessage/${sender}/phone/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
    const phoneNumber = text;
    sendText(sender, 'please enter the amount you will wish to deposit starting with the word X for example 250 to deposit Ksh250');
  } else if (text.includes('//')) {
    axios.get(`${urlToUse}/api/push/${sender}/amount/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
    const phoneNumber = text;
    sendText(sender, 'You will recieve a push notification shortly');
    quickReplyAcc(sender);
  } else if (text.includes('fer')) {
    const service = text;
    sendText(sender, 'please enter the acount number you will wish to transfer starting with the Bank example NBK123');
    axios.get(`${urlToUse}/api/postmessage/${sender}/tranfer/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (service === 'NBK') {
    sendText(sender, 'you will recieve an OTP on your phone enter the OTP starting with the word O here to confirm the transaction for example O1234');
    axios.get(`${urlToUse}/api/otp/${sender}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (service === 'O') {
    sendText(sender, 'wrong OTP');
    sendQuickTrans(sender, 'Choose the service youll like to use');
  } else if (text.includes('gen')) {
    sendButtonGen(sender, 'This are general services available');
  } else if (text.includes('locate')) {
    axios.get(`${urlToUse}/api/postmessage/${sender}/location/${text}`)
      .then((response) => {
        const data = response.status;
        quickReplyLoc(sender);
      })
      .catch((error) => {
      });
  } else if (service === 'loc') {
    sendText(sender, 'The nearest branch is NBK .. opens at 8 and closses at 5. The Atms available are .... they work 24/7');
    sendButtonGen(sender, 'This are general services available');
  } else if (text.includes('nonexist')) {
    sendQuickYes(sender);
  } else if (text.includes('water')) {
    const service = text;
    sendText(sender, 'please enter the amount you will wish to pay');
  } else if (service === 'water') {
    sendText(sender, 'Youll receive a push notification shortly');
    const amount = text;
    axios.post('https://payme.ticketsoko.com/api/index.php?function=CustomerPayBillOnline&PayBillNumber=175555&Amount=500&PhoneNumber=254715428709&AccountReference=tickets&TransactionDesc=yolo')
      .then((response) => {
      })
      .catch((error) => {
      });
  } else if (text.includes('kibet')) {
    sendText(sender, 'US DOLLAR	100.7472	100.6472	100.8472\n,US DOLLAR	100.7472	100.6472	100.8472\n,US DOLLAR	100.7472	100.6472	100.8472\n,US DOLLAR	100.7472	100.6472	100.8472');
    sendButtonGen(sender, 'This are general services available');
  } else if (text.includes('cheque')) {
    sendQuickcheq(sender, 'Your chequebook is now ordered and can be collected at harambee Avenue, is this convinient for you?');
    axios.get(`${urlToUse}/api/postmessage/${sender}/chequestatus/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (text.includes('debit')) {
    sendQuickdebit(sender);
    axios.get(`${urlToUse}/api/postmessage/${sender}/email/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (text.includes('not now')) {
    sendQuickcheq(sender, 'Anything else you would like my assitance on?');
    axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (text.includes('qali')) {
    sendQuickRead(sender, 'Great welcome to national bank, there are afew items you will require on hand, Your National ID and make sure your MPESA has atleast Kshs 100.00, cofirm when ready ');
  } else if (text.includes('cancel')) {
    sendButtonMessage2(sender, 'Process cancelled \n Choose the service youll like to use');
  } else if (text.includes('ready')) {
    sendText(sender, 'Enter your ID number eg 33865745');
    axios.get(`${urlToUse}/api/postmessage/${sender}/idreg/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (text.includes('i dont mind')) {
    sendQuickDep(sender, 'We have Chequebooks and Debit card for your account which if requested cn be picked from a branch of your convinience would you like to order for any of them');
  } else if (text.includes('///')) {
    sendText(sender, 'Good, there are afew items you will require on hand, Your National ID and make sure your MPESA has atleast Kshs 100.00, cofirm when ready.Enter your ID number starting with the word ID eg ID33865745');
  } else if (text.includes('cheque')) {
    sendQuickcheq(sender);
  } else if (text.includes('debit')) {
    sendQuickcheq(sender);
  } else if (text.includes('//')) {
    axios.get(`${urlToUse}/api/postmessage/${sender}/reg2/${text}`)
      .then((response) => {
        const data = response.status;
        sendText(sender, 'Gorrit, Enter you phone number beggining with the country code eg 254715428709');
      })
      .catch((error) => {
      });
  } else if (text.includes('///n')) {
    axios.get(`${urlToUse}/api/register/${sender}/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
    sendText(sender, 'You will receive an OTP on your phone Please enter here to verify your phoneNumber');
  } else if (text.includes('hi kunta')) {
    axios.get(`https://graph.facebook.com/${sender}?fields=first_name,last_name,profile_pic&access_token=${token}`)
      .then((response) => {
        const data = response.status;
        const name = response.data.first_name;
        sendText(sender, `Hi ${name},  Welcome back.`);
        sendButtonMessage2(sender, 'This is are ways I can help you');
      })
      .catch((error) => {
      });
  } else if (text.includes('load ksh.100 now')) {
    sendText(sender, 'You will receive an STK push enter you mpesa pin and proceed');
    axios.get(`${urlToUse}/api/push1/${sender}`)
      .then((response) => {
        const data = response.status;
        sendQuickDep(sender);
      })
      .catch((error) => {
      });
  } else if (text.includes('load more than')) {
    sendText(sender, 'Enter the amount you want to deposit');
    axios.get(`${urlToUse}/api/postmessage/${sender}/more100/${text}`)
      .then((response) => {
        const data = response.status;
      })
      .catch((error) => {
      });
  } else if (text.includes('load later')) {
    sendQuickDep(sender);
  } else if (text.includes('//')) {
    axios.get(`${urlToUse}/api/otp/${sender}/${text}`)
      .then((response) => {
        const data = response.status;
        const lee = response.data.status;
        if (lee === '200') {
          sendText(sender, 'Ok, am sending you a request for a small initail deposit to activate the account');

          axios.get(`${urlToUse}/api/push1/${sender}`)
            .then((response) => {
              const data = response.status;
              sendQuickmind(sender);
              axios.get(`${urlToUse}/api/postmessage/${sender}/reg3/${text}`)
                .then((response) => {
                  const data = response.status;
                })
                .catch((error) => {
                });
            })
            .catch((error) => {
            });
        } else {
          sendText(sender, 'Wrong OTP. Contact our customer care for assistant');
        }
      })
      .catch((error) => {
      });
  } else {
    axios.get(`${urlToUse}/api/pastmessage/${sender}`)
      .then((response) => {
        const data = response.status;
        const message = response.data.data;
        if (message === 'registeryes') {
          sendText(sender, 'Good, there are afew items you will require on hand, Your National ID and make sure your MPESA has atleast Kshs 100.00, cofirm when ready.Enter your ID number starting with the word ID eg ID33865745');
        } else if (message === 'reg2') {
          axios.get(`${urlToUse}/api/register/${sender}/${text}`)
            .then((response) => {
              const data = response.status;
              axios.get(`${urlToUse}/api/postmessage/${sender}/otpreg/${text}`)
                .then((response) => {
                  const data = response.status;
                })
                .catch((error) => {
                });
            })
            .catch((error) => {
            });
          quickReplyOTP(sender, 'You will receive an OTP on your phone. Please enter the OTP here to verify your phoneNumber');
        }
        // for the otp confirmation
        else if (message === 'otpreg') {
          axios.get(`${urlToUse}/api/otp/${sender}/${text}`)
            .then((response) => {
              const data = response.status;
              const lee = response.data.status;
              if (lee === '200') {
                sendQuickPush(sender);
              } else {
                quickReplyOTP(sender, 'Wrong OTP. Contact our customer care for assistant');
              }
            })
            .catch((error) => {
            });
        } else if (message === 'idln') {
          axios.get(`${urlToUse}/api/postmessage/${sender}/ID/${text}`)
            .then((response) => {
              const data = response.status;
              axios.get(`${urlToUse}/api/postmessage/${sender}/phonelink/${text}`)
                .then((response) => {
                  const data = response.status;
                })
                .catch((error) => {
                });
            })
            .catch((error) => {
            });
          sendText(sender, 'Enter you phone number beggining with country code eg , 254715428709');
        } else if (message === 'mini1') {
          axios.get(`${urlToUse}/api/ministatement/${sender}`)
            .then((response) => {
              const number = response.data.data;
              const str = number.replace(/\d(?=\d{4})/g, '*');
              sendQuickcheq(sender, `Your ministatement as been sent to your phone ${str} .Anything else you would like my assitance on?`);
            })
            .catch((error) => {
            });

          axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
            .then((response) => {
              const data = response.status;
            })
            .catch((error) => {
            });
        } else if (message === 'phonelink') {
          axios.get(`${urlToUse}/api/link/${sender}/${text}`)
            .then((response) => {
              const data = response.status;
              axios.get(`${urlToUse}/api/postmessage/${sender}/otplink/${text}`)
                .then((response) => {
                  const data = response.status;
                })
                .catch((error) => {
                });
            })
            .catch((error) => {
            });
          sendText(sender, 'OTP has been sent to your phone use to link the account');
        } else if (message === 'otplink') {
          axios.get(`${urlToUse}/api/otp/${sender}/${text}`)
            .then((response) => {
              const data = response.status;
              const lee = response.data.status;
              if (lee === '200') {
                sendText(sender, 'Two accounts \n 1. 121454*******25. \n2. 35422**************32. \n have been linked to this facebook account');
                axios.get(`https://graph.facebook.com/${sender}?fields=first_name,last_name,profile_pic&access_token=${token}`)
                  .then((response) => {
                    const data = response.status;
                    const name = response.data.first_name;
                    sendButtonMessage2(sender, 'This are ways I can help you');
                  })
                  .catch((error) => {
                  });
              } else {
                sendText(sender, 'Wrong OTP. Contact our customer care for assistant');
              }
            })
            .catch((error) => {
            });
        } else if (message === 'balanceco1') {
          axios.get(`${urlToUse}/api/balance/${sender}`)
            .then((response) => {
              const number = response.data.phone;
              const str = number.replace(/\d(?=\d{4})/g, '*');
              sendQuickcheq(sender, `Your balance as been sent to your phone ${str} .Anything else you would like my assitance on?`);
            })
            .catch((error) => {
            });
          axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
            .then((response) => {
              const data = response.status;
            })
            .catch((error) => {
            });
        } else if (message === 'balanceco') {
          axios.get(`${urlToUse}/api/postmessage/${sender}/balanceco1/${text}`)
            .then((response) => {
              const data = response.status;
            })
            .catch((error) => {
            });
          sendText(sender, 'Please choose the Account you would want to check the balance \n 1 acc 543*******325\n 2 acc 543***********125');
        } else if (message === 'chequestatus') {
          if (text === 'yes') {
            axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
              .then((response) => {
                const data = response.status;
              })
              .catch((error) => {
              });
            sendQuickcheq(sender, 'Anything else you would like my assitance on?');
          } else {
            axios.get(`${urlToUse}/api/postmessage/${sender}/chequeLocation/${text}`)
              .then((response) => {
                const data = response.status;
              })
              .catch((error) => {
              });
            sendText(sender, 'Enter the convenient branch you will pick your cheque/debit');
          }
        } else if (message === 'chequeLocation') {
          sendQuickcheq(sender, 'Anything else you would like my assitance on?');
          axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
            .then((response) => {
              const data = response.status;
            })
            .catch((error) => {
            });
        } else if (message === 'final') {
          if (text === 'yes') {
            sendButtonMessage2(sender, 'Here are services available for you');
          } else {
            axios.get(`https://graph.facebook.com/${sender}?fields=first_name,last_name,profile_pic&access_token=${token}`)
              .then((response) => {
                const data = response.status;
                const name = response.data.first_name;
                sendText(sender, `Have a great day ${name} and hope to hear from you soon, you can always reachout to me here by just typing 'Hi' or call us on 0703088000. And im always here 24/7 to assist you 👋`);
              })
              .catch((error) => {
              });
          }
        } else if (message === 'email') {
          if (text === 'yes') {
            sendText(sender, 'Enter your email');
            axios.get(`${urlToUse}/api/postmessage/${sender}/emailfinal/${text}`)
              .then((response) => {
                const data = response.status;
              })
              .catch((error) => {
              });
          } else {
            sendQuickcheq(sender, 'Anything else you would like my assitance on?');
            axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
              .then((response) => {
                const data = response.status;
              })
              .catch((error) => {
              });
          }
        } else if (message === 'emailfinal') {
          sendQuickcheq(sender, 'Anything else you would like my assitance on?');
          axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
            .then((response) => {
              const data = response.status;
            })
            .catch((error) => {
            });
        } else if (message === 'reg3') {
          if (text === 'yes') {
            sendQuickDep(sender);
          } else {
            sendQuickcheq(sender, 'Anything else you would like my assitance on?');
            axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
              .then((response) => {
                const data = response.status;
              })
              .catch((error) => {
              });
          }
        } else if (message === 'deposit') {
          axios.get(`${urlToUse}/api/postmessage/${sender}/phone/${text}`)
            .then((response) => {
              const data = response.status;
            })
            .catch((error) => {
            });
        } else if (message === 'amountdepo') {
          axios.get(`${urlToUse}/api/push/${sender}/amount/${text}`)
            .then((response) => {
              const data = response.status;
              sleep(2000);
              axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
                .then((response) => {
                  const data = response.status;
                  sendQuickcheq(sender, 'Anything else you would like my assitance on?');
                })
                .catch((error) => {
                });
            })
            .catch((error) => {
            });
          const phoneNumber = text;
          sendText(sender, 'You will recieve a push notification shortly');
        } else if (message === 'more100') {
          axios.get(`${urlToUse}/api/push2/${sender}/${text}`)
            .then((response) => {
              const data = response.status;
              axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
                .then((response) => {
                  const data = response.status;
                  sendQuickcheq(sender, 'Anything else you would like my assitance on?');
                })
                .catch((error) => {
                });
            })
            .catch((error) => {
            });
          const phoneNumber = text;
          sendText(sender, 'You will recieve a push notification shortly');
        } else if (message === 'location') {
          sendText(sender, "The nearest branch to you is Harambee Avenue and it's operating time is betweem 8:30am and 4:30pm on weekdays and 8:30am to 12:30pm on weekends, but we are closed on Sundays and all national public holidays, Is there any enquiry you wish to make");
          axios.get(`${urlToUse}/api/postmessage/${sender}/final/${text}`)
            .then((response) => {
              const data = response.status;
              sendQuickcheq(sender, 'Anything else you would like my assitance on?');
            })
            .catch((error) => {
            });
        } else if (message === 'idreg') {
          axios.get(`${urlToUse}/api/postmessage/${sender}/reg2/${text}`)
            .then((response) => {
              const data = response.status;
              sendText(sender, 'Gorrit, Enter you phone number beggining with the country code eg 254715428709');
            })
            .catch((error) => {
            });
        }
      })
      .catch((error) => {
      });
  }
}

function messageReceived(req, res) {
  const messagingEvents = req.body.entry[0].messaging;
  for (let i = 0; i < messagingEvents.length; i++) {
    const event = messagingEvents[i];
    const sender = event.sender.id;
    if (event.message && event.message.text) {
      const { text } = event.message;
      decideMessage(sender, text);
    }

    if (event.postback) {
      const text = JSON.stringify(event.postback.payload);
      decideMessage(sender, text);
    }
  }
  res.sendStatus(200);
}

export default messageReceived;
