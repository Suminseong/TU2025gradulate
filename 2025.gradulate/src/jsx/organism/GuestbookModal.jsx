// src/jsx/organism/GuestbookModal.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const base = import.meta.env.BASE_URL || '/';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Overlay = styled.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  opacity: 0;
  animation: ${p => (p.$closing ? fadeOut : fadeIn)} 220ms ease-out forwards;
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 200px 16px;
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
  @media (max-width: 376px)
 {
    padding: 12px;
    border-radius: 10px;
 }
 `;
const Row = styled.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
  @media (max-width: 376px) {
    width: 260px;
    gap: 10px;
  }
`;
const Card = styled.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
  @media (max-width: 376px) {
    width: 220px;
    height: 300px;
  }
`;
const DecoBig = styled.div`
  position: absolute;
  left: 12px;
  top: 314.67px;
  width: 302px;
  height: 246px;
  background-image: url(${base}guestbook-card.svg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    left: 4px;
    top: 210px;
    width: 158px;
    height: 130px;
  }
  @media (max-width: 376px) {
    left: 4px;
    top: 180px;
    width: 140px;
    height: 115px;
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
  @media (max-width: 376px) {
    font-size: 18px;
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
  @media (max-width: 376px) {
    font-size: 14px;
    min-width: 60px; max-width: 120px;
  }
`;

const ToOutput = styled.div`
  border: none; outline: none;
  background: transparent;
  font-family: Pretendard, system-ui;
  font-size: 28px; color: #555;
  font-weight: 600;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 240px;
  @media (max-width: 640px) {
    font-size: 20px;
    min-width: 90px; max-width: 150px;
    padding: 2px 4px;
  }
`;

const ContentWrap = styled.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 60px; width: 206px;
  }
`;
const Textarea = styled.textarea`
  width: 353px; min-height: 220px; resize: none;
  border: none; outline: none;
  border-radius: 12px; padding: 14px 16px;
  font-family: Pretendard, system-ui; font-size: 18px; line-height: 27px; color: #303030;
  background: rgba(255,255,255,.6);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.5);
  @media (max-width: 640px) {
    min-height: 120px; border-radius: 10px; padding: 10px 12px;
    font-size: 14px; line-height: 21px; width: 182px; height: auto;
  }
  @media (max-width: 376px) {
    width: 150px;
  }
`;
const TextOutput = styled.div`
  width: 353px; min-height: 220px; resize: none;
  max-height: 400px;
  border: none; outline: none;
  border-radius: 12px; padding: 14px 0px;
  font-family: Pretendard, system-ui; font-size: 20px; line-height: 150%; color: #303030;
  font-weight: 400;
  @media (max-width: 640px) {
    min-height: 120px; border-radius: 10px; padding: 10px 12px;
    font-size: 14px; line-height: 21px;
    padding: 0px; max-width: 230px;
  }
`;


const FromRow = styled.div`
  position: absolute; right: 32px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
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
  @media (max-width: 376px) {
    font-size: 18px;
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
    min-width: 90px; max-width: 120px;
    text-align: right;
  }
  @media (max-width: 376px) {
    min-width: 60px; max-width: 100px;
    font-size: 14px;
  }
`;

const FromOutput = styled.div`
border: none; outline: none;
  /* border-bottom: 1px solid rgba(0,0,0,.18); */
  background: transparent;
  font-family: Pretendard, system-ui; font-size: 32px; color: #555;
  font-weight: 600;
  padding: 2px 4px;
  min-width: 120px; max-width: 180px;
  @media (max-width: 640px) {
    font-size: 18px;
    min-width: 22px; max-width: 140px;
    text-align: right;
  }
`;

const SideCol = styled.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
  @media (max-width: 376px) {
    width: 40px;
    height: 300px;
  }
`;
const SendBtn = styled.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
  &:hover {
    background: #404040;
  }
`;
const SendInner = styled.div`
  width: auto; height: auto;
  /* background: #fff;  */
  /* clip-path: polygon(0 0,100% 50%,0 100%); */
  background-image: url(${base}icons/guestbook-send.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 34px; height: 34px;
  margin-left: 4px;
  @media (max-width: 640px) {
    width: 26px; height: 26px;
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
  border-radius: 30px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(2px);
  @media (max-width: 640px) {
    position: fixed; left: 50%; bottom: 120px; top: auto; transform: translateX(-50%);
    width: 56px; height: 56px; border-radius: 28px; background: #fff1;
    backdrop-filter: blur(2px);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.3);
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
  defaultMessage = '',
  type,
}) {
  const [shouldRender, setShouldRender] = useState(open);
  const [isClosing, setIsClosing] = useState(false);
  const [toName, setToName] = useState(defaultTo);
  const [fromName, setFromName] = useState(defaultFrom);
  const [message, setMessage] = useState('');
  const overlayRef = useRef(null);

  // Reset inputs and then close
  const handleClose = useCallback(() => {
    // start fade-out immediately
    setIsClosing(true);
    setToName('');
    setFromName('');
    setMessage('');
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, handleClose]);

  // When the modal opens, initialize fields from defaults
  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsClosing(false);
      setToName((defaultTo ?? '').toString());
      setFromName((defaultFrom ?? '').toString());
      setMessage((defaultMessage ?? '').toString());
    }
  }, [open, defaultTo, defaultFrom, defaultMessage]);

  // When parent closes (open -> false), play fade-out then unmount
  useEffect(() => {
    if (!open && shouldRender) {
      setIsClosing(true);
      const t = setTimeout(() => {
        setIsClosing(false);
        setShouldRender(false);
      }, 220);
      return () => clearTimeout(t);
    }
  }, [open, shouldRender]);

  if (!shouldRender) return null;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const submit = () => {
    const data = { to: (toName || '').trim(), from: (fromName || '').trim(), message: (message || '').trim() };
    if (!data.message) return;
    onSubmit?.(data);
  };

  console.log(type)

  if (type === 'add') {
    return (
      <Overlay ref={overlayRef} onMouseDown={handleOverlayClick} $closing={isClosing}>
        <Wrapper onMouseDown={(e) => e.stopPropagation()}>
          <Glass>
            <Row>
              <Card>
                <DecoBig />
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
            <CloseBox type="button" onClick={handleClose} aria-label="close">
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
  if (type === 'guestbook') {
    return (
      <Overlay ref={overlayRef} onMouseDown={handleOverlayClick} $closing={isClosing}>
        <Wrapper onMouseDown={(e) => e.stopPropagation()}>
          <Glass>
              <Card>
                <DecoBig />
                <TitleRow>
                  <LabelTo>To.</LabelTo>
                  <ToOutput>{defaultTo}</ToOutput>
                </TitleRow>
                <ContentWrap>
                  <TextOutput>{defaultMessage}</TextOutput>
                </ContentWrap>
                <FromRow>
                  <LabelFrom>From.</LabelFrom>
                  <FromOutput>{defaultFrom}</FromOutput>
                </FromRow>
              </Card>
          </Glass>
          <CloseRail>
            <CloseBox type="button" onClick={handleClose} aria-label="close">
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
}
