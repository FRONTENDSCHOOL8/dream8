# Dream 8조

# 프로젝트 명 : Dream

# 목차

[1. 프로젝트 소개](#1.프로젝트-소개) <br/>
[2. 기획](#-2.-기획)  <br/>
3. 디자인 시안(Figma) <br/>
4. 데이터베이스 ERM <br/>
5. 주요기능 
6. 기능별 페이지 분석
7. 팀원 회고


# 1.프로젝트 소개
💖 Dream은 환경 보호와 사회 공헌을 동시에 실현하는 거래, 중고판매 온라인 플랫폼입니다. 사용하지 않는 옷을 버리는 대신 필요한 사람들에게 판매하고, 판매 수익은 사회 공헌 활동에 기부됩니다.

👨‍👩‍👧‍👦Introducing the team
<ul>
<table>
  <tbody>
    <tr>
      <td align="center"><a href=""><img src="https://github.com/FRONTENDSCHOOL8/dream8/assets/147236247/bc3c45d7-3c02-435c-80ed-cc3ca809a800" width="100px" height="120px" alt=""/><br /><sub><b>FE 팀장 : 정서린 </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://github.com/FRONTENDSCHOOL8/dream8/assets/147236247/e07f7088-5a4b-4303-a564-36938a00104e" width="100px" height="100px" alt=""/><br /><sub><b>FE 스크럼마스터 : 강태욱 </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://github.com/FRONTENDSCHOOL8/dream8/assets/113508075/f559e510-135d-43b0-845c-abcc5cf3be1e" width="100px" height="100px" alt=""/><br /><sub><b>FE 팀원 : 조현돈 </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://github.com/FRONTENDSCHOOL8/dream8/assets/147236247/e43331e2-4358-40b6-b86d-69b276519f17" width="100px" height="100px" alt=""/><br /><sub><b>FE 팀원 : 여서윤 </b></sub></a><br /></td>
     </tr>
  </tbody>
</table>
</ul>


  ## 팀원 Github 주소
 
👨‍🚀 정서린 :  
   👨‍🚀강태욱 :   
      👨‍🚀 조현돈 :  
       👨‍🚀여서윤 :  

</br>
</br>



<ul>
      <li> 프로젝트 이름 : Dream </li>
   <li> 프로젝트 기간 :   2024 2월 19일 ~ 3월 14일</li>
   <li> 프로젝트 설치 방법 :
    </br> 패키지 설치
  
      npm i
      npm run dev
      
      
   </li>
      <li>프로젝트 vacel URL :  
        
        https://dream8.vercel.app/ 
        
    
</li>
      <li>작동 화면 :</li>
      <li>기술스택 : </li>
</ul>





# 2. 기획

  기획 발표 URL : https://www.canva.com/design/DAF9ZAMC0L4/PgiIeWpvj1BTwMY_7Yckog/edit





# 3. 디자인 시안(Figma)


<ul>
      <li>  디자인 시안 주소 : https://www.figma.com/file/q0xtysWbr782sTQhpVn4AL/Untitled?type=design&node-id=620%3A2429&mode=design&t=6ICEgpSdzUAjXh5p-1</li>
   <li> 화면 구성:</li>
   <li> 프로젝트 설치 방법 : clone 후 npm i </li>
   <li> 유저 플로우  :</li>
    
</ul>





# 4. 데이터베이스 ERM





# 5. 주요기능 


<ul>
        <li> </li>
   <li> </li>
   <li>  </li>
   <li> </li>
    
</ul>


# 6 기능별 페이지 분석
## 공통 요소
Button, Input 같이 재사용성이 높은 요소는 아토믹 컴포넌트로 제작

## 💻 정서린

<ul>
      <li> ??페이지 : </li>
   <li> </li>
   <li>  </li>
   <li> </li>
    
</ul>

## 💻 강태욱

<ul>
        <li> ??페이지 : </li>
   <li> </li>
   <li>  </li>
   <li> </li>
    
</ul>

## 💻 조현돈

**교환페이지**
<ul> 
   <li>Pocketbase/PocketHost를 이용한 상품의 isExchange가 참인 상품 리스트 렌더링</li>
   <li>포켓베이스 exchange에 있는 데이터 리스트 렌더링</li>
   <li>더보기 버튼으로 리스트들 더 볼수 있도록 구현 </li>
</ul>

**교환디테일 페이지**
<ul> 
   <li>각 리스트들의 id를 useParams로 가져와서 각 페이지 렌더링</li>
   <li>게시글 작성했다면 수정하기, 삭제하기 기능 추가</li>
   <li>게시글을 작성하지 않은 다른 사용자는 채팅만 가능</li>
</ul>

**교환글 작성 페이지**
<ul> 
   <li>교환을 원하는 상품이 있을시 form 데이터로 글을 작성할 수 있는 패이지 구현</li>
   <li>신청 폼의 글을 비우게 되면 오류가 나도록 validation 구현</li>
   <li>교환 상세 페이지에 300글자 넘어거면 오류 생기도록 validation 구현</li>
</ul>

**교환글 수정 페이지**
<ul> 
   <li>게시글을 작성한 사람이 글을 수정하고 샆을 떄 수정할 수 있도록 구현</li>
   <li>신청 양식에는 기본적인 전에 사용했던 목록을 가져와서 렌더링</li>
   <li>수정글을 아무것도 수정하지 않았다면 오류 나도록 validation 구현</li>
</ul>

**채팅 페이지**
<ul> 
   <li>리얼 타임 데이터 베이스로 사용자들 끼리 1대1 채팅 구현</li>
  <li>아직 완벽하게 구현은 x</li>
</ul>


## 💻 여서윤

<ul>
         <li> ??페이지 :  </li>
   <li> </li>
   <li>  </li>
   <li> </li>
    
</ul>


# 7. 팀원 회고

<ul>
   <li> 정서린 :   어쩌구 저쩌구 </li>
   <li> 강태욱 :   어쩌구 저쩌구 </li>
      <li> 조현돈 :   어쩌구 저쩌구 </li>
      <li> 여서윤 :   어쩌구 저쩌구 </li>
   <li></li>
</ul>


