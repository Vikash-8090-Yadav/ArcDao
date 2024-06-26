![image](https://github.com/Vikash-8090-Yadav/ArcDao/assets/85225156/565652c2-7ffd-49ed-bb67-8695228a6664)



## This dapp is live :https://arc-dao.vercel.app/

## Demo Video:  https://youtu.be/ImXcE-UEySo?si=vztxMtqD1EH_4hKX


# Smart contract  -  0xEf75f5dcaA00c6247CA19d06f2DDCC3D73DC5Ef2


https://base-sepolia.blockscout.com/address/0xEf75f5dcaA00c6247CA19d06f2DDCC3D73DC5Ef2


![Screenshot from 2024-06-26 05-31-20](https://github.com/Vikash-8090-Yadav/ArcDao/assets/85225156/54e978eb-8193-4a20-8f2c-ec7e510dce19)




#  Motivation

For years I have wanted to participate in fund initiatives to invest in projects (startups and others), but the bureaucracy, the high requirements, and many other problems make it very difficult. And it is something that not only I experience, but also many other people who have a little money and want to support projects in the medium/long term. The exact size of the private investment fund market is difficult to determine, as there is no single, comprehensive source of data. However, it is estimated that this market has experienced significant growth in recent decades. According to Bain & Company's Global Private Equity Report 2021, assets under management in the private equity industry reached a record of approximately US$4.6 trillion in 2020. The United States has traditionally been the leader in the private investment fund market, with many of the largest private equity firms based in the United States. However, in recent years there has been a significant increase in private equity activity in other regions, such as Europe, Asia, and Latin America. In addition to traditional private equity, there are also other types of private investment funds, such as hedge funds, venture capital funds, and private debt funds. Each of these segments has distinct characteristics and investment approaches. Therefore, through DAO (decentralized organizations) we can create structures so that anyone can invest, through investment clubs (by affinity of ideas, professional relationship, etc.) through Blockchain from anywhere in the world and with fewer requirements. That is why Arc Dao was born.


#  💡Introduction

Arc Dao allows you to manage investment clubs, and to spread access to participate in investment funds to anyone, decentralized, agile, and without bureaucracy.Implementing a comprehensive on-chain governance system allows DataDAO members to create and vote on proposals, covering aspects such as member management, dataset storage and distribution, and token distribution. This ensures a democratic and transparent decision-making process within the DAO.


# Use of Arcana 

### I used Arcana for the authentication part 

![Screenshot from 2024-06-26 05-33-39](https://github.com/Vikash-8090-Yadav/ArcDao/assets/85225156/b1714714-bf73-4117-b2a6-12b09fe6ce63)


## Code for the authentication can be found here: https://github.com/Vikash-8090-Yadav/ArcDao/blob/main/Frontend/src/index.js#L11

# Features of Arc Dao

- Create investment clubs: Just define a name and the club will be associated with the account of the user who creates it (owner).

![Screenshot from 2024-06-26 05-39-04](https://github.com/Vikash-8090-Yadav/ArcDao/assets/85225156/d76d7cda-49b9-4d2f-b433-9f945489c76f)



- Join Dao -> User have similar  interest based on their profile can only  join otherwise they r not eligible to join

![Screenshot from 2024-06-26 05-39-35](https://github.com/Vikash-8090-Yadav/ArcDao/assets/85225156/ddf8e321-b167-4be4-a06d-fbe110334bbb)



- Contribute to the club: Any member of a Dao can contribute to the common fund (pool), depositing  coins that can be used in proposals.
 
![Screenshot from 2024-06-26 05-40-24](https://github.com/Vikash-8090-Yadav/ArcDao/assets/85225156/9f50e184-231a-4179-aa9c-545797aa6d79)


Txn hash: https://base-sepolia.blockscout.com/tx/0x43dec3141598f36124b2f674c71e654ad5c2e21b59ec68ec422f3d3e126b2941

- Create and Vote on Proposals: Any member who has contributed funds to the club pool can create proposals, giving a description, amount (not to exceed the pool amount), and recipient, with a view to investing in any business/person in a project. Also, all members can approve or reject the proposal (only one vote per member is allowed on each proposal).


![Screenshot from 2024-06-26 05-41-05](https://github.com/Vikash-8090-Yadav/ArcDao/assets/85225156/aae15bc3-aa60-4548-a146-16fec1312e96)



- Run Proposals: A proposal owner can execute a proposal (if approval is greater than rejection), which will cause the proposal amount to be sent to the specified recipient. The owner can also close a proposal, in case of not continuing with it, either as a cancellation, publication error or to avoid sending funds.

![Screenshot from 2024-06-26 05-41-52](https://github.com/Vikash-8090-Yadav/ArcDao/assets/85225156/907a6618-86d6-429f-b1ec-26ddebd54bc3)



TXN hash: https://base-sepolia.blockscout.com/tx/0xe3e308ec455a214910b6d08fa5d6d3ac7832545722e948621f2d6b7c1f4296de


- Timing voting:  After  creation of proposal there is only about 5 min time is given to the  mmeber to  vote.


![Screenshot from 2024-06-26 05-42-50](https://github.com/Vikash-8090-Yadav/ArcDao/assets/85225156/9fb5b0da-6116-4f44-abde-f4436a564aa7)

# Restrictions

The club smart contract has some restrictions, similar to real hedge funds:

- Up to 99 members per club (in many jurisdictions, such as the USA and Chile, this is the maximum limit of club members for certain purposes and types of clubs).
- Only members can participate in club instances.
- Only members who contribute funds to a club have the right to create proposals.
- Only proposal creators can execute them.

## 💥 Challenges I ran into

- A/c to the docs, for the signature I have to use eth_sign and it's giving me error and it takes me  around 3 days to find the sol but yes with the help of the Arcana mentor who is ```niyanx#6863 ``` (Discord Id)  help me to solve this error by replacing eth_sign with eth_signTyped_v4. 



## Below is the images of all error 

![Screenshot from 2024-06-26 05-53-25](https://github.com/Vikash-8090-Yadav/ArcDao/assets/85225156/80e6ee11-c645-4e45-8f92-f74846541531)



## What Next for Arc Dao ?

- ChainLink function (Twitter) -> I can use twitter function  to check the  latest post wether that person is fake or real
-  Ai for recommendation on user interest 
-  Chat system b/w voter and  proposal owner
    
<br>

<a href = "#top">Back to top</a>



### 	▶️ Experience the Live Site by Clicking the Link Below
<br>
<div align="center">
  <table>
    <tr>
      <th>Deployed On</th>
      <th>URL</th>
    </tr>
    <tr>
      <td>Vercel</td>
      <td>
         https://arc-dao.vercel.app/
      </td>
    </tr>
    </tr>
    </table>
</div>
<br><br>

## 🚀 Setting up the project locally

To run the  ArcDao locally, follow these steps:
1. Clone the repository:
 ```bash
https://github.com/Vikash-8090-Yadav/ArcDao.git
 ```
 2. Navigate to the project directory:
```bash
cd  ArcDao/Frontend
```
3. Node Re-versioning

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

4. Install the dependencies:
```bash
npm install --legacy-peer-deps
```

6. Access the dApp:
```bash
npm start
```
Open your web browser and visit the URL SHOWING IN UR TERMINAL to interact with the Trasur Dao

<br>

## 🛠️Technologies we used


[![Powered by Lighthouse](https://img.shields.io/badge/Powered_by-Lighthouse-ff69b4?logo=lighthouse)](https://lighthouse.filecoin.io/)
[![Built with React.js](https://img.shields.io/badge/Built_with-React.js-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Powered by Ethereum](https://img.shields.io/badge/Powered_by-Ethereum-3C3C3D?logo=ethereum)](https://ethereum.org/)

| Technology        | Description                                                | Official Website                                     |
|-------------------|------------------------------------------------------------|------------------------------------------------------|
| React.js          | JavaScript library for building user interfaces, often used for server-rendered or statically-generated applications | [React.js](https://reactjs.org/)                      |
| Tailwind CSS      | Utility-first CSS framework for building custom designs   | [Tailwind CSS](https://tailwindcss.com/)              |
| Solidity | Programming language used for smart contract development on the Ethereum blockchain | https://docs.soliditylang.org/ |
|LightHouse | Store file Secure, Reliable, & Lightning-Fast with Lighthouse. |https://www.lighthouse.storage/|
|Arcana|Modular Layer 1 to power Chain Abstraction  |https://arcana.network/| 

