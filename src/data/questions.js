const questions = [
  {
    question: 'เมื่อคุณต้องเดินทาง คุณจะ..',
    answers: [
      {
        key: 'A',
        answer: 'หาข้อมูลก่อนว่าไปทางไหนถึงไวที่สุด ถ้านั่งพี่วินได้ก็นั่งเลย',
      },
      {
        key: 'B',
        answer:
          'ลองเปลี่ยนวิธีเดินทางบ้าง ไม่จำเป็นต้องเลือกทางที่ดีที่สุด แต่ให้เลือกทางที่มีความสุขที่สุด',
      },
      {
        key: 'C',
        answer: 'ส่วนใหญ่จะเลือกไปแบบที่เราเคยใช้ประจำมากกว่าแหละ',
      },
    ],
  },
  {
    question: 'ถ้าคุณต้องข้ามถนนเล็กๆตรงแยกไฟแดง คุณจะ..',
    answers: [
      {
        key: 'D',
        answer: 'ยังไงก็รอไฟเขียวแดง ทำตามกฏอยู่แล้ว',
      },
      {
        key: 'E',
        answer:
          'ขึ้นอยู่กับว่ารีบมั้ย ถ้ารีบ ดูแล้วไม่มีรถ ปลอดภัย ก็ข้ามเลยสิฮะ',
      },
      {
        key: 'F',
        answer: 'แอบคิดนะ ว่าไฟเขียวแดงเนี่ย เคยมั้ยที่ทุกฝั่งขึ้นไฟแดงหมดเลย',
      },
    ],
  },
  {
    question: 'เสาร์นี้เพื่อนเก่ามัธยมปลายนัดกันไปดูหนังหล่ะ ถ้างั้นเราก็..',
    answers: [
      {
        key: 'G',
        answer: 'ยังไม่ใครเสนอว่าจะไปดูเรื่องอะไร รีบเสนอก่อนเลยดีกว่า อิ๊อิ๊',
      },
      {
        key: 'H',
        answer:
          'เอ เราชวนเพื่อนๆครบยังนะ ถ้าคนที่ไม่ได้ชวนเค้ารู้ เค้าจะน้อยใจมั้ยเนี่ย',
      },
      {
        key: 'I',
        answer:
          'เดี๋ยวเดินไปเจอเพื่อนๆช้านิดนึงดีกว่า ไม่เจอกันนาน ไม่รู้ว่าบรรยากาศมันจะอึดอัดมั้ย',
      },
      {
        key: 'J',
        answer:
          'ตื่นเต้นๆ อยากคุยกับทุกคนเลย เราน่าจะเจอกันบ่อยๆนะจะได้รู้ว่าใครทำอะไรอยู่บ้าง',
      },
    ],
  },
  {
    question: 'คุณชอบแนวความคิดแบบไหนมากที่สุด',
    answers: [
      {
        key: 'K',
        answer: 'เราให้ความสำคัญกับวิธีการทำงานด้วย ไม่ใช่สนใจแต่ผลลัพธ์',
      },
      {
        key: 'L',
        answer: 'ในการทำงานผลประโยชน์ที่ได้กับลูกค้าสำคัญที่สุด',
      },
      {
        key: 'M',
        answer:
          'ไม่มีวิธีแก้ปัญหาที่ถูกหรือผิด มีแต่ว่าผลลัพธ์ที่ออกมาแก้ปัญหาได้ดีแค่ไหน',
      },
      {
        key: 'N',
        answer: 'ทีมที่มีความสุขในการทำงาน มักจะทำผลงานออกมาได้ดี',
      },
    ],
  },
  {
    question: 'น้องสองคนของคุณทะเลาะกัน คุณจะ..',
    answers: [
      {
        key: 'O',
        answer:
          'พยายามไม่เข้าไปยุ่งถ้าไม่จำเป็น เอาไว้มีผลกระทบกับเราค่อยว่ากันนะ',
      },
      {
        key: 'P',
        answer: 'ช่วยเข้าไปคุยกับน้องๆ หาสาเหตุแล้วก็แนะนำวิธีแก้ปัญหา',
      },
      {
        key: 'Q',
        answer:
          'ดูก่อนว่าทะเลาะกันมากแค่ไหน ถ้าเป็นเรื่องเล็กๆก็ให้เค้าแก้ปัญหากันเอง',
      },
    ],
  },
  {
    question:
      'วันนี้ว่างมาก จู่ๆมีเพื่อนโทรมาชวนคุณกินข้าวเวลาเย็นวันนั้น คุณจะ..',
    answers: [
      {
        key: 'R',
        answer: 'พร้อมบวกเลย แต่ให้เพื่อนจัดการเลือกร้านอาหาร เวลาและสถานที่นะ',
      },
      {
        key: 'S',
        answer:
          'ถามก่อนสิว่ากี่คน มีใครบ้าง จะกินอะไร ที่ไหน กี่โมง แล้วค่อยตัดสินใจว่าจะไปไม่ไป',
      },
      {
        key: 'T',
        answer: 'ขอเป็นคนเลือกร้านอาหาร นัดเวลา และจองร้านอาหารให้',
      },
    ],
  },
  {
    question:
      'ถ้ามีเวลาเหลือแค่ครึ่งชั่วโมงในการเดินทางไปรับของก่อนร้านจะปิด คุณจะ..',
    answers: [
      {
        key: 'U',
        answer: 'แง วันนี้ไม่น่าไปทัน โทรไปเลื่อนเป็นวันอื่นดีกว่า',
      },
      {
        key: 'V',
        answer: 'โดดขึ้นวินมอไซค์ไปยี่สิบกว่านาทีทันฉิวเฉียด',
      },
      {
        key: 'W',
        answer:
          'โทรบอกที่ร้านว่าจะเลทประมาณ 15 นาที รถติดนิดหน่อยแต่ว่ากำลังไป',
      },
      {
        key: 'X',
        answer: 'โทรไปบอกที่ร้านว่าไปน่าเข้าไปทันวันนี้ ทำยังไงดีฺฮะ',
      },
    ],
  },
];

export default questions;
