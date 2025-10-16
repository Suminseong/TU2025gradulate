// src/jsx/organism/GuestbookModal.jsx
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 84px 16px;
  }
`;
const Wrapper = styled.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
  @media (max-width: 640px) {
    gap: 0;
  }
`;
const Glass = styled.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    padding: 18px;
    border-radius: 12px;
  }
`;
const Row = styled.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
`;
const Card = styled.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
`;
const DecoBig = styled.div`
  position: absolute; left: 66.53px; top: 314.67px; width: 248.47px; height: 245.33px; border-radius: 9999px; background: #EDECF2;
  @media (max-width: 640px) {
    left: 40px; top: 210px; width: 160px; height: 158px;
  }
`;
const DecoDot = styled.div`
  position: absolute; left: 13.33px; top: 504.92px; width: 42.14px; height: 41.05px; border-radius: 9999px; background: #EDECF2;
  @media (max-width: 640px) {
    left: 8px; top: 300px; width: 28px; height: 28px;
  }
`;
const TitleRow = styled.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 18px; top: 22px; gap: 6px;
  }
`;
const LabelTo = styled.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`;
const ToInput = styled.input`
  border: none; outline: none;
  border-bottom: 1px solid rgba(0,0,0,.18);
  background: transparent;
  font-family: Pretendard, system-ui;
  font-size: 28px; color: #303030;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 220px;
  @media (max-width: 640px) {
    font-size: 18px;
    min-width: 90px; max-width: 150px;
  }
`;
const ContentWrap = styled.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 78px; width: 206px;
  }
`;
const Textarea = styled.textarea`
  width: 100%; min-height: 220px; resize: none;
  border: none; outline: none;
  border-radius: 12px; padding: 14px 16px;
  font-family: Pretendard, system-ui; font-size: 18px; line-height: 27px; color: #303030;
  background: rgba(255,255,255,.6);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.5);
  @media (max-width: 640px) {
    min-height: 120px; border-radius: 10px; padding: 10px 12px;
    font-size: 14px; line-height: 21px;
  }
`;
const FromRow = styled.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 110px; top: 270px; gap: 6px;
  }
  @media (max-width: 640px) {
    left: auto; top: auto; right: 18px; bottom: 16px; gap: 6px;
  }
`;
const LabelFrom = styled.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`;
const FromInput = styled.input`
  border: none; outline: none;
  border-bottom: 1px solid rgba(0,0,0,.18);
  background: transparent;
  font-family: Pretendard, system-ui; font-size: 20px; color: #303030;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 180px;
  @media (max-width: 640px) {
    font-size: 16px;
    min-width: 90px; max-width: 140px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    min-width: 90px; max-width: 120px;
    text-align: right;
  }
`;
const SideCol = styled.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
`;
const SendBtn = styled.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
`;
const SendInner = styled.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
  @media (max-width: 640px) {
    width: 16px; height: 14px;
  }
`;
const CloseRail = styled.div`
  width: 60px; height: 640px; position: relative;
  @media (max-width: 640px) {
    width: 100%; height: auto;
  }
`;
const CloseBox = styled.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
  @media (max-width: 640px) {
    position: fixed; left: 50%; bottom: 20px; top: auto; transform: translateX(-50%);
    width: 56px; height: 56px; border-radius: 28px; background: #fff1;
    backdrop-filter: blur(2px);
  }
`;
const CloseInner = styled.div`
  width: 32px; height: 32px; position: relative;
`;
const CloseStroke = styled.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${props => props.$deg}deg);
  @media (max-width: 640px) {
    left: 15px; top: 4px; height: 24px;
  }
`;

export default function GuestbookModal({
  open,
  onClose,
  onSubmit,
  defaultTo = '',
  defaultFrom = '',
}) {
  const [toName, setToName] = useState(defaultTo);
  const [fromName, setFromName] = useState(defaultFrom);
  const [message, setMessage] = useState('');
  const overlayRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose?.();
  };

  const submit = () => {
    const data = { to: (toName || '').trim(), from: (fromName || '').trim(), message: (message || '').trim() };
    if (!data.message) return;
    onSubmit?.(data);
  };

  return (
    <Overlay ref={overlayRef} onMouseDown={handleOverlayClick}>
      <Wrapper onMouseDown={(e) => e.stopPropagation()}>
        <Glass>
          <Row>
            <Card>
              <DecoBig />
              <DecoDot />
              <TitleRow>
                <LabelTo>To.</LabelTo>
                <ToInput
                  value={toName}
                  onChange={(e) => setToName(e.target.value)}
                  placeholder="받는 사람"
                />
              </TitleRow>
              <ContentWrap>
                <Textarea
                  placeholder="내용을 입력해 주세요."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </ContentWrap>
              <FromRow>
                <LabelFrom>From.</LabelFrom>
                <FromInput
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  placeholder="보내는 사람"
                />
              </FromRow>
            </Card>
            <SideCol>
              <SendBtn type="button" onClick={submit} aria-label="send">
                <SendInner />
              </SendBtn>
            </SideCol>
          </Row>
        </Glass>
        <CloseRail>
          <CloseBox type="button" onClick={onClose} aria-label="close">
            <CloseInner>
              <CloseStroke $deg={45} />
              <CloseStroke $deg={-45} />
            </CloseInner>
          </CloseBox>
        </CloseRail>
      </Wrapper>
    </Overlay>
  );
}
