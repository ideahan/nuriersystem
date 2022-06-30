function inc_linkInfo() {
    var t = "";
    t += "<h2>Link info.</h2>",
    t += '<table width="" summary="링크관련">',
    t += "<caption>링크관련</caption>",
    t += "<colgroup>",
    t += '\t<col width="100px" />',
    t += '\t<col width="500px" />',
    t += "</colgroup>",
    t += "<tbody>",
    t += "\t<tr>",
    t += '\t\t<th scope="row">Pub</th>',
    t += '\t\t<td class="tobe_section">',
    t += "\t\t\t<div>",
    t += '\t\t\t\t<a href="../../index.html" class="btn active"><span>Web</span></a>',
    //t += '\t\t\t\t<a href="../../../../admin/index.html" class="btn"><span>통합관리자</span></a>',
    t += "\t\t\t</div>",
    t += "\t\t</td>",
    t += "\t</tr>",
    t += "</tbody>",
    t += "</table>",
    document.write(t)
}
function inc_filter() {
    var t = "";
    t += "\t\t<h2>Filter.</h2>",
    t += '\t\t<table width="" summary="퍼블리싱 문서 규격 및 크로스브라우징 관련">',
    t += "\t\t<caption>문서 정보</caption>",
    t += '\t\t<colgroup><col width="140px" /><col width="460px" /></colgroup>',
    t += "\t\t<tbody>",
    t += "\t\t\t<tr>",
    t += '\t\t\t\t<th><span class="total_rate">&nbsp;<span></th>',
    t += '\t\t\t\t<td class="filter_btn">',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="del btn bullet" title="del"><span>삭제</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="equal btn bullet" title="equal"><span>동일</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="hold btn bullet" title="hold"><span>보류</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="change btn bullet" title="change"><span>수정</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="rework btn bullet" title="rework"><span>재확인</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="layer btn bullet" title="layer"><span>레이어</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="popup btn bullet" title="popup"><span>팝업</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="new btn bullet" title="new"><span>신규</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="result btn bullet" title="result"><span>완료</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="result_ex btn bullet" title="result_ex"><span>미완</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="total btn bullet on" title="total"><span>Total</span></a>',
    t += '\t\t\t\t\t<a href="javascript:void(0);" class="real btn bullet" title="real"><span>삭제제외</span></a>',
    t += "\t\t\t\t</td>",
    t += "\t\t\t</tr>",
    t += "\t\t\t<tr>",
    t += '\t\t\t\t<th><label for="id_search">Search</label></th>',
    t += '\t\t\t\t<td class="search">',
    t += '\t\t\t\t\t<input type="text" name="search" value="" id="id_search" placeholder="Search" />',
    t += "\t\t\t\t</td>",
    t += "\t\t\t</tr>",
    t += "\t\t</tbody>",
    t += "\t\t</table>",
    document.write(t)
}
function inc_linkInfo_admin() {
    var t = "";
    t += "<h2>Link info.</h2>",
    t += '<table width="600" summary="링크관련">',
    t += "<caption>링크관련</caption>",
    t += "<colgroup>",
    t += '\t<col width="100px" />',
    t += '\t<col width="500px" />',
    t += "",
    t += "</colgroup>",
    t += "<tbody>",
    t += "\t<tr>",
    t += '\t\t<th scope="row">As-Is</th>',
    t += "\t\t<td>",
    t += "\t\t\t<div>",
    t += '\t\t\t\t<strong class="w40">Front.</strong>',
    t += '\t\t\t\t<a href="http://www.ebcard.co.kr/" target="_blank" class="btn"><span>이비카드</span></a>',
    t += '\t\t\t\t<a href="https://www.cashbee.co.kr/" target="_blank" class="btn"><span>캐시비카드</span></a>',
    t += '\t\t\t\t<a href="https://www.mybi.co.kr/" target="_blank" class="btn"><span>마이비카드</span></a>',
    t += '\t\t\t\t<a href="http://www.busanhanaro.com/" target="_blank" class="btn"><span>하나로카드</span></a>',
    t += '\t\t\t\t<a href="https://www.ebtaxi.com/" target="_blank" class="btn"><span>택시</span></a>',
    t += '\t\t\t\t<a href="http://www.evebcard.co.kr/" target="_blank" class="btn"><span>전기차</span></a>',
    t += "\t\t\t</div>",
    t += "\t\t\t<div>",
    t += '\t\t\t\t<strong class="w40">Admin.</strong>',
    t += '\t\t\t\t<a href="http://kg.ebcard.co.kr/ebus/index.html" target="_blank" class="btn"><span>이비카드</span></a>',
    t += '\t\t\t\t<a href="http://www.cashbee.co.kr/cashbee/Admin/Default.jsp" target="_blank" class="btn"><span>캐시비카드</span></a>',
    t += '\t\t\t\t<a href="http://report.mybi.co.kr/" target="_blank" class="btn"><span>마이비카드</span></a>',
    t += '\t\t\t\t<a href="#" target="_blank" class="btn"><span>하나로카드</span></a>',
    t += '\t\t\t\t<a href="http://ebtaxi.com:7001" target="_blank" class="btn"><span>택시</span></a>',
    t += '\t\t\t\t<a href="http://www.evebcard.co.kr/" target="_blank" class="btn"><span>전기차</span></a>',
    t += "\t\t\t</div>",
    t += "\t\t</td>",
    t += "\t</tr>",
    t += "\t<tr>",
    t += '\t\t<th scope="row">To-Be</th>',
    t += '\t\t<td class="tobe_section">',
    t += "\t\t\t<div>",
    t += '\t\t\t\t<strong class="w40">Front.</strong>',
    t += '\t\t\t\t<a href="../front/webApp/WEB-INF/AFC_EB_HP/worklist.html" class="btn"><span>이비카드</span></a>',
    t += '\t\t\t\t<a href="../front/webApp/WEB-INF/AFC_CASHBEE_HP/worklist.html" class="btn"><span>캐시비카드</span></a>',
    t += '\t\t\t\t<a href="../front/webApp/WEB-INF/AFC_MYBEE_HP/worklist.html" class="btn"><span>마이비카드</span></a>',
    t += '\t\t\t\t<a href="../front/webApp/WEB-INF/AFC_HANARO_HP/worklist.html" class="btn"><span>하나로카드</span></a>',
    t += '\t\t\t\t<a href="../front/webApp/WEB-INF/AFC_CBTAXI_HP/worklist.html" class="btn"><span>택시</span></a>',
    t += '\t\t\t\t<a href="../front/webApp/WEB-INF/AFC_CBEV_HP/worklist.html" class="btn"><span>전기차</span></a>',
    t += "\t\t\t</div>",
    t += "\t\t\t<div>",
    t += '\t\t\t\t<strong class="w40">Admin.</strong>',
    t += '\t\t\t\t<a href="#" class="btn active"><span>통합관리자</span></a>',
    t += "\t\t\t</div>",
    t += "\t\t</td>",
    t += "\t</tr>",
    t += "</tbody>",
    t += "</table>",
    document.write(t)
}
function inc_IAHead() {
    var t = "";
    t += "<caption>작업 리스트</caption>",
    t += "<colgroup>",
    t += '\t<col width="3%" /><!-- 번호 -->',
    t += '\t<col class="depth2" style="width:13%" /><!-- 2Depth -->',
    t += '\t<col class="depth3" style="width:14%" /><!-- 3Depth -->',
    t += '\t<col class="page" style="width:11%" /><!-- 화면ID -->',
    t += '\t<col class="pid" style="width:11%" /><!-- 메뉴명 -->',
    t += '\t<col class="path" style="width:6%" /><!-- 경로 -->',
    t += '\t<col class="coder" style="width:4%" /><!-- 개발자 -->',
    t += '\t<col class="rdate" style="width:4%" /><!-- 완료일 -->',
    t += '\t<col class="mdate" style="width:4%" /><!-- 수정일 -->',
    t += '\t<col class="etc" style="width:auto" /><!-- 비고 -->',
    t += "</colgroup>",
    t += "<thead>",
    t += "\t<tr>",
    t += '\t\t<th scope="col" class="num">번호</th>',
    t += '\t\t<th scope="col" class="depth2">2Depth</th>',
    t += '\t\t<th scope="col" class="depth3">3Depth</th>',
    t += '\t\t<th scope="col" class="page">화면ID</th>',
    t += '\t\t<th scope="col" class="pid">메뉴명</th>',
    t += '\t\t<th scope="col" class="path">경로</th>',
    t += '\t\t<th scope="col" class="coder">개발자</th>',
    t += '\t\t<th scope="col" class="rdate">완료일</th>',
    t += '\t\t<th scope="col" class="mdate">수정일</th>',
    t += '\t\t<th scope="col" class="etc">비고</th>',
    t += "\t</tr>",
    t += "</thead>",
    document.write(t)
}
!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length"in t && t.length
          , n = pt.type(t);
        return "function" !== n && !pt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function i(t, e, n) {
        if (pt.isFunction(e))
            return pt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return pt.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (xt.test(e))
                return pt.filter(e, t, n);
            e = pt.filter(e, t)
        }
        return pt.grep(t, function(t) {
            return pt.inArray(t, e) > -1 !== n
        })
    }
    function o(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);return t
    }
    function r(t) {
        var e = {};
        return pt.each(t.match(Tt) || [], function(t, n) {
            e[n] = !0
        }),
        e
    }
    function a() {
        it.addEventListener ? (it.removeEventListener("DOMContentLoaded", s),
        t.removeEventListener("load", s)) : (it.detachEvent("onreadystatechange", s),
        t.detachEvent("onload", s))
    }
    function s() {
        (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (a(),
        pt.ready())
    }
    function u(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(St, "-$1").toLowerCase();
            if ("string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : _t.test(n) ? pt.parseJSON(n) : n)
                } catch (t) {}
                pt.data(t, e, n)
            } else
                n = void 0
        }
        return n
    }
    function l(t) {
        var e;
        for (e in t)
            if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function c(t, e, n, i) {
        if (Dt(t)) {
            var o, r, a = pt.expando, s = t.nodeType, u = s ? pt.cache : t, l = s ? t[a] : t[a] && a;
            if (l && u[l] && (i || u[l].data) || void 0 !== n || "string" != typeof e)
                return l || (l = s ? t[a] = nt.pop() || pt.guid++ : a),
                u[l] || (u[l] = s ? {} : {
                    toJSON: pt.noop
                }),
                ("object" == typeof e || "function" == typeof e) && (i ? u[l] = pt.extend(u[l], e) : u[l].data = pt.extend(u[l].data, e)),
                r = u[l],
                i || (r.data || (r.data = {}),
                r = r.data),
                void 0 !== n && (r[pt.camelCase(e)] = n),
                "string" == typeof e ? null == (o = r[e]) && (o = r[pt.camelCase(e)]) : o = r,
                o
        }
    }
    function d(t, e, n) {
        if (Dt(t)) {
            var i, o, r = t.nodeType, a = r ? pt.cache : t, s = r ? t[pt.expando] : pt.expando;
            if (a[s]) {
                if (e && (i = n ? a[s] : a[s].data)) {
                    pt.isArray(e) ? e = e.concat(pt.map(e, pt.camelCase)) : e in i ? e = [e] : (e = pt.camelCase(e),
                    e = e in i ? [e] : e.split(" ")),
                    o = e.length;
                    for (; o--; )
                        delete i[e[o]];
                    if (n ? !l(i) : !pt.isEmptyObject(i))
                        return
                }
                (n || (delete a[s].data,
                l(a[s]))) && (r ? pt.cleanData([t], !0) : dt.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    function f(t, e, n, i) {
        var o, r = 1, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return pt.css(t, e, "")
        }
        , u = s(), l = n && n[3] || (pt.cssNumber[e] ? "" : "px"), c = (pt.cssNumber[e] || "px" !== l && +u) && $t.exec(pt.css(t, e));
        if (c && c[3] !== l) {
            l = l || c[3],
            n = n || [],
            c = +u || 1;
            do {
                r = r || ".5",
                c /= r,
                pt.style(t, e, c + l)
            } while (r !== (r = s() / u) && 1 !== r && --a)
        }
        return n && (c = +c || +u || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = l,
        i.start = c,
        i.end = o)),
        o
    }
    function p(t) {
        var e = Rt.split("|")
          , n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length; )
                n.createElement(e.pop());
        return n
    }
    function h(t, e) {
        var n, i, o = 0, r = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [],
            n = t.childNodes || t; null != (i = n[o]); o++)
                !e || pt.nodeName(i, e) ? r.push(i) : pt.merge(r, h(i, e));
        return void 0 === e || e && pt.nodeName(t, e) ? pt.merge([t], r) : r
    }
    function g(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)
            pt._data(n, "globalEval", !e || pt._data(e[i], "globalEval"))
    }
    function v(t) {
        Mt.test(t.type) && (t.defaultChecked = t.checked)
    }
    function m(t, e, n, i, o) {
        for (var r, a, s, u, l, c, d, f = t.length, m = p(e), y = [], b = 0; f > b; b++)
            if ((a = t[b]) || 0 === a)
                if ("object" === pt.type(a))
                    pt.merge(y, a.nodeType ? [a] : a);
                else if (It.test(a)) {
                    for (u = u || m.appendChild(e.createElement("div")),
                    l = (Ht.exec(a) || ["", ""])[1].toLowerCase(),
                    d = Ot[l] || Ot._default,
                    u.innerHTML = d[1] + pt.htmlPrefilter(a) + d[2],
                    r = d[0]; r--; )
                        u = u.lastChild;
                    if (!dt.leadingWhitespace && zt.test(a) && y.push(e.createTextNode(zt.exec(a)[0])),
                    !dt.tbody)
                        for (a = "table" !== l || Pt.test(a) ? "<table>" !== d[1] || Pt.test(a) ? 0 : u : u.firstChild,
                        r = a && a.childNodes.length; r--; )
                            pt.nodeName(c = a.childNodes[r], "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (pt.merge(y, u.childNodes),
                    u.textContent = ""; u.firstChild; )
                        u.removeChild(u.firstChild);
                    u = m.lastChild
                } else
                    y.push(e.createTextNode(a));
        for (u && m.removeChild(u),
        dt.appendChecked || pt.grep(h(y, "input"), v),
        b = 0; a = y[b++]; )
            if (i && pt.inArray(a, i) > -1)
                o && o.push(a);
            else if (s = pt.contains(a.ownerDocument, a),
            u = h(m.appendChild(a), "script"),
            s && g(u),
            n)
                for (r = 0; a = u[r++]; )
                    qt.test(a.type || "") && n.push(a);
        return u = null,
        m
    }
    function y() {
        return !0
    }
    function b() {
        return !1
    }
    function x() {
        try {
            return it.activeElement
        } catch (t) {}
    }
    function w(t, e, n, i, o, r) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n,
            n = void 0);
            for (s in e)
                w(t, s, n, i, e[s], r);
            return t
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = b;
        else if (!o)
            return t;
        return 1 === r && (a = o,
        o = function(t) {
            return pt().off(t),
            a.apply(this, arguments)
        }
        ,
        o.guid = a.guid || (a.guid = pt.guid++)),
        t.each(function() {
            pt.event.add(this, e, o, i, n)
        })
    }
    function E(t, e) {
        return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function C(t) {
        return t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function A(t) {
        var e = Jt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function T(t, e) {
        if (1 === e.nodeType && pt.hasData(t)) {
            var n, i, o, r = pt._data(t), a = pt._data(e, r), s = r.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (i = 0,
                    o = s[n].length; o > i; i++)
                        pt.event.add(e, n, s[n][i])
            }
            a.data && (a.data = pt.extend({}, a.data))
        }
    }
    function F(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(),
            !dt.noCloneEvent && e[pt.expando]) {
                o = pt._data(e);
                for (i in o.events)
                    pt.removeEvent(e, i, o.handle);
                e.removeAttribute(pt.expando)
            }
            "script" === n && e.text !== t.text ? (C(e).text = t.text,
            A(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML),
            dt.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Mt.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
            e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }
    function k(t, e, n, i) {
        e = rt.apply([], e);
        var o, r, a, s, u, l, c = 0, d = t.length, f = d - 1, p = e[0], g = pt.isFunction(p);
        if (g || d > 1 && "string" == typeof p && !dt.checkClone && Qt.test(p))
            return t.each(function(o) {
                var r = t.eq(o);
                g && (e[0] = p.call(this, o, r.html())),
                k(r, e, n, i)
            });
        if (d && (l = m(e, t[0].ownerDocument, !1, t, i),
        o = l.firstChild,
        1 === l.childNodes.length && (l = o),
        o || i)) {
            for (s = pt.map(h(l, "script"), C),
            a = s.length; d > c; c++)
                r = l,
                c !== f && (r = pt.clone(r, !0, !0),
                a && pt.merge(s, h(r, "script"))),
                n.call(t[c], r, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument,
                pt.map(s, A),
                c = 0; a > c; c++)
                    r = s[c],
                    qt.test(r.type || "") && !pt._data(r, "globalEval") && pt.contains(u, r) && (r.src ? pt._evalUrl && pt._evalUrl(r.src) : pt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Zt, "")));
            l = o = null
        }
        return t
    }
    function D(t, e, n) {
        for (var i, o = e ? pt.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || pt.cleanData(h(i)),
            i.parentNode && (n && pt.contains(i.ownerDocument, i) && g(h(i, "script")),
            i.parentNode.removeChild(i));
        return t
    }
    function _(t, e) {
        var n = pt(e.createElement(t)).appendTo(e.body)
          , i = pt.css(n[0], "display");
        return n.detach(),
        i
    }
    function S(t) {
        var e = it
          , n = ie[t];
        return n || (n = _(t, e),
        "none" !== n && n || (ne = (ne || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
        e = (ne[0].contentWindow || ne[0].contentDocument).document,
        e.write(),
        e.close(),
        n = _(t, e),
        ne.detach()),
        ie[t] = n),
        n
    }
    function N(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function $(t) {
        if (t in ye)
            return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = me.length; n--; )
            if ((t = me[n] + e)in ye)
                return t
    }
    function B(t, e) {
        for (var n, i, o, r = [], a = 0, s = t.length; s > a; a++)
            i = t[a],
            i.style && (r[a] = pt._data(i, "olddisplay"),
            n = i.style.display,
            e ? (r[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && jt(i) && (r[a] = pt._data(i, "olddisplay", S(i.nodeName)))) : (o = jt(i),
            (n && "none" !== n || !o) && pt._data(i, "olddisplay", o ? n : pt.css(i, "display"))));
        for (a = 0; s > a; a++)
            i = t[a],
            i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
        return t
    }
    function j(t, e, n) {
        var i = he.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function L(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2)
            "margin" === n && (a += pt.css(t, n + Bt[r], !0, o)),
            i ? ("content" === n && (a -= pt.css(t, "padding" + Bt[r], !0, o)),
            "margin" !== n && (a -= pt.css(t, "border" + Bt[r] + "Width", !0, o))) : (a += pt.css(t, "padding" + Bt[r], !0, o),
            "padding" !== n && (a += pt.css(t, "border" + Bt[r] + "Width", !0, o)));
        return a
    }
    function M(e, n, i) {
        var o = !0
          , r = "width" === n ? e.offsetWidth : e.offsetHeight
          , a = ue(e)
          , s = dt.boxSizing && "border-box" === pt.css(e, "boxSizing", !1, a);
        if (it.msFullscreenElement && t.top !== t && e.getClientRects().length && (r = Math.round(100 * e.getBoundingClientRect()[n])),
        0 >= r || null == r) {
            if (r = le(e, n, a),
            (0 > r || null == r) && (r = e.style[n]),
            re.test(r))
                return r;
            o = s && (dt.boxSizingReliable() || r === e.style[n]),
            r = parseFloat(r) || 0
        }
        return r + L(e, n, i || (s ? "border" : "content"), o, a) + "px"
    }
    function H(t, e, n, i, o) {
        return new H.prototype.init(t,e,n,i,o)
    }
    function q() {
        return t.setTimeout(function() {
            be = void 0
        }),
        be = pt.now()
    }
    function z(t, e) {
        var n, i = {
            height: t
        }, o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e)
            n = Bt[o],
            i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
        i
    }
    function R(t, e, n) {
        for (var i, o = (P.tweeners[e] || []).concat(P.tweeners["*"]), r = 0, a = o.length; a > r; r++)
            if (i = o[r].call(n, e, t))
                return i
    }
    function O(t, e, n) {
        var i, o, r, a, s, u, l, c = this, d = {}, f = t.style, p = t.nodeType && jt(t), h = pt._data(t, "fxshow");
        n.queue || (s = pt._queueHooks(t, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        u = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || u()
        }
        ),
        s.unqueued++,
        c.always(function() {
            c.always(function() {
                s.unqueued--,
                pt.queue(t, "fx").length || s.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
        l = pt.css(t, "display"),
        "inline" === ("none" === l ? pt._data(t, "olddisplay") || S(t.nodeName) : l) && "none" === pt.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden",
        dt.shrinkWrapBlocks() || c.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (o = e[i],
            we.exec(o)) {
                if (delete e[i],
                r = r || "toggle" === o,
                o === (p ? "hide" : "show")) {
                    if ("show" !== o || !h || void 0 === h[i])
                        continue;
                    p = !0
                }
                d[i] = h && h[i] || pt.style(t, i)
            } else
                l = void 0;
        if (pt.isEmptyObject(d))
            "inline" === ("none" === l ? S(t.nodeName) : l) && (f.display = l);
        else {
            h ? "hidden"in h && (p = h.hidden) : h = pt._data(t, "fxshow", {}),
            r && (h.hidden = !p),
            p ? pt(t).show() : c.done(function() {
                pt(t).hide()
            }),
            c.done(function() {
                var e;
                pt._removeData(t, "fxshow");
                for (e in d)
                    pt.style(t, e, d[e])
            });
            for (i in d)
                a = R(p ? h[i] : 0, i, c),
                i in h || (h[i] = a.start,
                p && (a.end = a.start,
                a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function I(t, e) {
        var n, i, o, r, a;
        for (n in t)
            if (i = pt.camelCase(n),
            o = e[i],
            r = t[n],
            pt.isArray(r) && (o = r[1],
            r = t[n] = r[0]),
            n !== i && (t[i] = r,
            delete t[n]),
            (a = pt.cssHooks[i]) && "expand"in a) {
                r = a.expand(r),
                delete t[i];
                for (n in r)
                    n in t || (t[n] = r[n],
                    e[n] = o)
            } else
                e[i] = o
    }
    function P(t, e, n) {
        var i, o, r = 0, a = P.prefilters.length, s = pt.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (o)
                return !1;
            for (var e = be || q(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, r = 1 - i, a = 0, u = l.tweens.length; u > a; a++)
                l.tweens[a].run(r);
            return s.notifyWith(t, [l, r, n]),
            1 > r && u ? n : (s.resolveWith(t, [l]),
            !1)
        }, l = s.promise({
            elem: t,
            props: pt.extend({}, e),
            opts: pt.extend(!0, {
                specialEasing: {},
                easing: pt.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: be || q(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = pt.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0
                  , i = e ? l.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; i > n; n++)
                    l.tweens[n].run(1);
                return e ? (s.notifyWith(t, [l, 1, 0]),
                s.resolveWith(t, [l, e])) : s.rejectWith(t, [l, e]),
                this
            }
        }), c = l.props;
        for (I(c, l.opts.specialEasing); a > r; r++)
            if (i = P.prefilters[r].call(l, t, c, l.opts))
                return pt.isFunction(i.stop) && (pt._queueHooks(l.elem, l.opts.queue).stop = pt.proxy(i.stop, i)),
                i;
        return pt.map(c, R, l),
        pt.isFunction(l.opts.start) && l.opts.start.call(t, l),
        pt.fx.timer(pt.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function W(t) {
        return pt.attr(t, "class") || ""
    }
    function U(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var i, o = 0, r = e.toLowerCase().match(Tt) || [];
            if (pt.isFunction(n))
                for (; i = r[o++]; )
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                    (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function X(t, e, n, i) {
        function o(s) {
            var u;
            return r[s] = !0,
            pt.each(t[s] || [], function(t, s) {
                var l = s(e, n, i);
                return "string" != typeof l || a || r[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l),
                o(l),
                !1)
            }),
            u
        }
        var r = {}
          , a = t === Oe;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }
    function V(t, e) {
        var n, i, o = pt.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && pt.extend(!0, t, n),
        t
    }
    function G(t, e, n) {
        for (var i, o, r, a, s = t.contents, u = t.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    u.unshift(a);
                    break
                }
        if (u[0]in n)
            r = u[0];
        else {
            for (a in n) {
                if (!u[0] || t.converters[a + " " + u[0]]) {
                    r = a;
                    break
                }
                i || (i = a)
            }
            r = r || i
        }
        return r ? (r !== u[0] && u.unshift(r),
        n[r]) : void 0
    }
    function K(t, e, n, i) {
        var o, r, a, s, u, l = {}, c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters)
                l[a.toLowerCase()] = t.converters[a];
        for (r = c.shift(); r; )
            if (t.responseFields[r] && (n[t.responseFields[r]] = e),
            !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            u = r,
            r = c.shift())
                if ("*" === r)
                    r = u;
                else if ("*" !== u && u !== r) {
                    if (!(a = l[u + " " + r] || l["* " + r]))
                        for (o in l)
                            if (s = o.split(" "),
                            s[1] === r && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[o] : !0 !== l[o] && (r = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && t.throws)
                            e = a(e);
                        else
                            try {
                                e = a(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: a ? t : "No conversion from " + u + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function Y(t) {
        return t.style && t.style.display || pt.css(t, "display")
    }
    function Q(t) {
        for (; t && 1 === t.nodeType; ) {
            if ("none" === Y(t) || "hidden" === t.type)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function J(t, e, n, i) {
        var o;
        if (pt.isArray(e))
            pt.each(e, function(e, o) {
                n || Ue.test(t) ? i(t, o) : J(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
        else if (n || "object" !== pt.type(e))
            i(t, e);
        else
            for (o in e)
                J(t + "[" + o + "]", e[o], n, i)
    }
    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function et(t) {
        return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = []
      , it = t.document
      , ot = nt.slice
      , rt = nt.concat
      , at = nt.push
      , st = nt.indexOf
      , ut = {}
      , lt = ut.toString
      , ct = ut.hasOwnProperty
      , dt = {}
      , ft = "1.12.0"
      , pt = function(t, e) {
        return new pt.fn.init(t,e)
    }
      , ht = function(t, e) {
        return e.toUpperCase()
    };
    pt.fn = pt.prototype = {
        jquery: ft,
        constructor: pt,
        selector: "",
        length: 0,
        toArray: function() {
            return ot.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : ot.call(this)
        },
        pushStack: function(t) {
            var e = pt.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t) {
            return pt.each(this, t)
        },
        map: function(t) {
            return this.pushStack(pt.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: nt.sort,
        splice: nt.splice
    },
    pt.extend = pt.fn.extend = function() {
        var t, e, n, i, o, r, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || pt.isFunction(a) || (a = {}),
        s === u && (a = this,
        s--); u > s; s++)
            if (null != (o = arguments[s]))
                for (i in o)
                    t = a[i],
                    n = o[i],
                    a !== n && (l && n && (pt.isPlainObject(n) || (e = pt.isArray(n))) ? (e ? (e = !1,
                    r = t && pt.isArray(t) ? t : []) : r = t && pt.isPlainObject(t) ? t : {},
                    a[i] = pt.extend(l, r, n)) : void 0 !== n && (a[i] = n));
        return a
    }
    ,
    pt.extend({
        expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === pt.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === pt.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t))
                return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            if (!dt.ownFirst)
                for (e in t)
                    return ct.call(t, e);
            for (e in t)
                ;
            return void 0 === e || ct.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ut[lt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && pt.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            }
            )(e)
        },
        camelCase: function(t) {
            return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, ht)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, o = 0;
            if (n(t))
                for (i = t.length; i > o && !1 !== e.call(t[o], o, t[o]); o++)
                    ;
            else
                for (o in t)
                    if (!1 === e.call(t[o], o, t[o]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? pt.merge(i, "string" == typeof t ? [t] : t) : at.call(i, t)),
            i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (st)
                    return st.call(e, t, n);
                for (i = e.length,
                n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i; )
                t[o++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i]; )
                    t[o++] = e[i++];
            return t.length = o,
            t
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, r = t.length, a = !n; r > o; o++)
                !e(t[o], o) !== a && i.push(t[o]);
            return i
        },
        map: function(t, e, i) {
            var o, r, a = 0, s = [];
            if (n(t))
                for (o = t.length; o > a; a++)
                    null != (r = e(t[a], a, i)) && s.push(r);
            else
                for (a in t)
                    null != (r = e(t[a], a, i)) && s.push(r);
            return rt.apply([], s)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            return "string" == typeof e && (o = t[e],
            e = t,
            t = o),
            pt.isFunction(t) ? (n = ot.call(arguments, 2),
            i = function() {
                return t.apply(e || this, n.concat(ot.call(arguments)))
            }
            ,
            i.guid = t.guid = t.guid || pt.guid++,
            i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: dt
    }),
    "function" == typeof Symbol && (pt.fn[Symbol.iterator] = nt[Symbol.iterator]),
    pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        ut["[object " + e + "]"] = e.toLowerCase()
    });
    var gt = function(t) {
        function e(t, e, n, i) {
            var o, r, a, s, l, d, f, p, h = e && e.ownerDocument, g = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g)
                return n;
            if (!i && ((e ? e.ownerDocument || e : q) !== S && _(e),
            e = e || S,
            $)) {
                if (11 !== g && (d = gt.exec(t)))
                    if (o = d[1]) {
                        if (9 === g) {
                            if (!(a = e.getElementById(o)))
                                return n;
                            if (a.id === o)
                                return n.push(a),
                                n
                        } else if (h && (a = h.getElementById(o)) && M(e, a) && a.id === o)
                            return n.push(a),
                            n
                    } else {
                        if (d[2])
                            return Y.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((o = d[3]) && b.getElementsByClassName && e.getElementsByClassName)
                            return Y.apply(n, e.getElementsByClassName(o)),
                            n
                    }
                if (b.qsa && !P[t + " "] && (!B || !B.test(t))) {
                    if (1 !== g)
                        h = e,
                        p = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(mt, "\\$&") : e.setAttribute("id", s = H),
                        f = C(t),
                        r = f.length,
                        l = ct.test(s) ? "#" + s : "[id='" + s + "']"; r--; )
                            f[r] = l + " " + c(f[r]);
                        p = f.join(","),
                        h = vt.test(t) && u(e.parentNode) || e
                    }
                    if (p)
                        try {
                            return Y.apply(n, h.querySelectorAll(p)),
                            n
                        } catch (t) {} finally {
                            s === H && e.removeAttribute("id")
                        }
                }
            }
            return T(t.replace(rt, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[H] = !0,
            t
        }
        function o(t) {
            var e = S.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function r(t, e) {
            for (var n = t.split("|"), i = n.length; i--; )
                x.attrHandle[n[i]] = e
        }
        function a(t, e) {
            var n = e && t
              , i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function s(t) {
            return i(function(e) {
                return e = +e,
                i(function(n, i) {
                    for (var o, r = t([], n.length, e), a = r.length; a--; )
                        n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function u(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        function l() {}
        function c(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function d(t, e, n) {
            var i = e.dir
              , o = n && "parentNode" === i
              , r = R++;
            return e.first ? function(e, n, r) {
                for (; e = e[i]; )
                    if (1 === e.nodeType || o)
                        return t(e, n, r)
            }
            : function(e, n, a) {
                var s, u, l, c = [z, r];
                if (a) {
                    for (; e = e[i]; )
                        if ((1 === e.nodeType || o) && t(e, n, a))
                            return !0
                } else
                    for (; e = e[i]; )
                        if (1 === e.nodeType || o) {
                            if (l = e[H] || (e[H] = {}),
                            u = l[e.uniqueID] || (l[e.uniqueID] = {}),
                            (s = u[i]) && s[0] === z && s[1] === r)
                                return c[2] = s[2];
                            if (u[i] = c,
                            c[2] = t(e, n, a))
                                return !0
                        }
            }
        }
        function f(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--; )
                    if (!t[o](e, n, i))
                        return !1;
                return !0
            }
            : t[0]
        }
        function p(t, n, i) {
            for (var o = 0, r = n.length; r > o; o++)
                e(t, n[o], i);
            return i
        }
        function h(t, e, n, i, o) {
            for (var r, a = [], s = 0, u = t.length, l = null != e; u > s; s++)
                (r = t[s]) && (!n || n(r, i, o)) && (a.push(r),
                l && e.push(s));
            return a
        }
        function g(t, e, n, o, r, a) {
            return o && !o[H] && (o = g(o)),
            r && !r[H] && (r = g(r, a)),
            i(function(i, a, s, u) {
                var l, c, d, f = [], g = [], v = a.length, m = i || p(e || "*", s.nodeType ? [s] : s, []), y = !t || !i && e ? m : h(m, f, t, s, u), b = n ? r || (i ? t : v || o) ? [] : a : y;
                if (n && n(y, b, s, u),
                o)
                    for (l = h(b, g),
                    o(l, [], s, u),
                    c = l.length; c--; )
                        (d = l[c]) && (b[g[c]] = !(y[g[c]] = d));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (l = [],
                            c = b.length; c--; )
                                (d = b[c]) && l.push(y[c] = d);
                            r(null, b = [], l, u)
                        }
                        for (c = b.length; c--; )
                            (d = b[c]) && (l = r ? J(i, d) : f[c]) > -1 && (i[l] = !(a[l] = d))
                    }
                } else
                    b = h(b === a ? b.splice(v, b.length) : b),
                    r ? r(null, a, b, u) : Y.apply(a, b)
            })
        }
        function v(t) {
            for (var e, n, i, o = t.length, r = x.relative[t[0].type], a = r || x.relative[" "], s = r ? 1 : 0, u = d(function(t) {
                return t === e
            }, a, !0), l = d(function(t) {
                return J(e, t) > -1
            }, a, !0), p = [function(t, n, i) {
                var o = !r && (i || n !== F) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i));
                return e = null,
                o
            }
            ]; o > s; s++)
                if (n = x.relative[t[s].type])
                    p = [d(f(p), n)];
                else {
                    if (n = x.filter[t[s].type].apply(null, t[s].matches),
                    n[H]) {
                        for (i = ++s; o > i && !x.relative[t[i].type]; i++)
                            ;
                        return g(s > 1 && f(p), s > 1 && c(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(rt, "$1"), n, i > s && v(t.slice(s, i)), o > i && v(t = t.slice(i)), o > i && c(t))
                    }
                    p.push(n)
                }
            return f(p)
        }
        function m(t, n) {
            var o = n.length > 0
              , r = t.length > 0
              , a = function(i, a, s, u, l) {
                var c, d, f, p = 0, g = "0", v = i && [], m = [], y = F, b = i || r && x.find.TAG("*", l), w = z += null == y ? 1 : Math.random() || .1, E = b.length;
                for (l && (F = a === S || a || l); g !== E && null != (c = b[g]); g++) {
                    if (r && c) {
                        for (d = 0,
                        a || c.ownerDocument === S || (_(c),
                        s = !$); f = t[d++]; )
                            if (f(c, a || S, s)) {
                                u.push(c);
                                break
                            }
                        l && (z = w)
                    }
                    o && ((c = !f && c) && p--,
                    i && v.push(c))
                }
                if (p += g,
                o && g !== p) {
                    for (d = 0; f = n[d++]; )
                        f(v, m, a, s);
                    if (i) {
                        if (p > 0)
                            for (; g--; )
                                v[g] || m[g] || (m[g] = G.call(u));
                        m = h(m)
                    }
                    Y.apply(u, m),
                    l && !i && m.length > 0 && p + n.length > 1 && e.uniqueSort(u)
                }
                return l && (z = w,
                F = y),
                v
            };
            return o ? i(a) : a
        }
        var y, b, x, w, E, C, A, T, F, k, D, _, S, N, $, B, j, L, M, H = "sizzle" + 1 * new Date, q = t.document, z = 0, R = 0, O = n(), I = n(), P = n(), W = function(t, e) {
            return t === e && (D = !0),
            0
        }, U = 1 << 31, X = {}.hasOwnProperty, V = [], G = V.pop, K = V.push, Y = V.push, Q = V.slice, J = function(t, e) {
            for (var n = 0, i = t.length; i > n; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)", ot = new RegExp(tt + "+","g"), rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$","g"), at = new RegExp("^" + tt + "*," + tt + "*"), st = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]","g"), lt = new RegExp(it), ct = new RegExp("^" + et + "$"), dt = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + nt),
            PSEUDO: new RegExp("^" + it),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Z + ")$","i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)","i")
        }, ft = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, ht = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, mt = /'|\\/g, yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)","ig"), bt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, xt = function() {
            _()
        };
        try {
            Y.apply(V = Q.call(q.childNodes), q.childNodes),
            V[q.childNodes.length].nodeType
        } catch (t) {
            Y = {
                apply: V.length ? function(t, e) {
                    K.apply(t, Q.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        b = e.support = {},
        E = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        _ = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : q;
            return i !== S && 9 === i.nodeType && i.documentElement ? (S = i,
            N = S.documentElement,
            $ = !E(S),
            (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)),
            b.attributes = o(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            b.getElementsByTagName = o(function(t) {
                return t.appendChild(S.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            b.getElementsByClassName = ht.test(S.getElementsByClassName),
            b.getById = o(function(t) {
                return N.appendChild(t).id = H,
                !S.getElementsByName || !S.getElementsByName(H).length
            }),
            b.getById ? (x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && $) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ,
            x.filter.ID = function(t) {
                var e = t.replace(yt, bt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ) : (delete x.find.ID,
            x.filter.ID = function(t) {
                var e = t.replace(yt, bt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }
            ),
            x.find.TAG = b.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, i = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            x.find.CLASS = b.getElementsByClassName && function(t, e) {
                return void 0 !== e.getElementsByClassName && $ ? e.getElementsByClassName(t) : void 0
            }
            ,
            j = [],
            B = [],
            (b.qsa = ht.test(S.querySelectorAll)) && (o(function(t) {
                N.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + tt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || B.push("\\[" + tt + "*(?:value|" + Z + ")"),
                t.querySelectorAll("[id~=" + H + "-]").length || B.push("~="),
                t.querySelectorAll(":checked").length || B.push(":checked"),
                t.querySelectorAll("a#" + H + "+*").length || B.push(".#.+[+~]")
            }),
            o(function(t) {
                var e = S.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && B.push("name" + tt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                B.push(",.*:")
            })),
            (b.matchesSelector = ht.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function(t) {
                b.disconnectedMatch = L.call(t, "div"),
                L.call(t, "[s!='']:x"),
                j.push("!=", it)
            }),
            B = B.length && new RegExp(B.join("|")),
            j = j.length && new RegExp(j.join("|")),
            e = ht.test(N.compareDocumentPosition),
            M = e || ht.test(N.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            W = e ? function(t, e) {
                if (t === e)
                    return D = !0,
                    0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === S || t.ownerDocument === q && M(q, t) ? -1 : e === S || e.ownerDocument === q && M(q, e) ? 1 : k ? J(k, t) - J(k, e) : 0 : 4 & n ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return D = !0,
                    0;
                var n, i = 0, o = t.parentNode, r = e.parentNode, s = [t], u = [e];
                if (!o || !r)
                    return t === S ? -1 : e === S ? 1 : o ? -1 : r ? 1 : k ? J(k, t) - J(k, e) : 0;
                if (o === r)
                    return a(t, e);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (n = e; n = n.parentNode; )
                    u.unshift(n);
                for (; s[i] === u[i]; )
                    i++;
                return i ? a(s[i], u[i]) : s[i] === q ? -1 : u[i] === q ? 1 : 0
            }
            ,
            S) : S
        }
        ,
        e.matches = function(t, n) {
            return e(t, null, null, n)
        }
        ,
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== S && _(t),
            n = n.replace(ut, "='$1']"),
            b.matchesSelector && $ && !P[n + " "] && (!j || !j.test(n)) && (!B || !B.test(n)))
                try {
                    var i = L.call(t, n);
                    if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (t) {}
            return e(n, S, null, [t]).length > 0
        }
        ,
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== S && _(t),
            M(t, e)
        }
        ,
        e.attr = function(t, e) {
            (t.ownerDocument || t) !== S && _(t);
            var n = x.attrHandle[e.toLowerCase()]
              , i = n && X.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !$) : void 0;
            return void 0 !== i ? i : b.attributes || !$ ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }
        ,
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        e.uniqueSort = function(t) {
            var e, n = [], i = 0, o = 0;
            if (D = !b.detectDuplicates,
            k = !b.sortStable && t.slice(0),
            t.sort(W),
            D) {
                for (; e = t[o++]; )
                    e === t[o] && (i = n.push(o));
                for (; i--; )
                    t.splice(n[i], 1)
            }
            return k = null,
            t
        }
        ,
        w = e.getText = function(t) {
            var e, n = "", i = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += w(t)
                } else if (3 === o || 4 === o)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += w(e);
            return n
        }
        ,
        x = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(yt, bt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && lt.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(yt, bt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = O[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && O(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : !n || (r += "",
                        "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3)
                      , a = "last" !== t.slice(-4)
                      , s = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, n, u) {
                        var l, c, d, f, p, h, g = r !== a ? "nextSibling" : "previousSibling", v = e.parentNode, m = s && e.nodeName.toLowerCase(), y = !u && !s, b = !1;
                        if (v) {
                            if (r) {
                                for (; g; ) {
                                    for (f = e; f = f[g]; )
                                        if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === t && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild],
                            a && y) {
                                for (f = v,
                                d = f[H] || (f[H] = {}),
                                c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                l = c[t] || [],
                                p = l[0] === z && l[1],
                                b = p && l[2],
                                f = p && v.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++b && f === e) {
                                        c[t] = [z, p, b];
                                        break
                                    }
                            } else if (y && (f = e,
                            d = f[H] || (f[H] = {}),
                            c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                            l = c[t] || [],
                            p = l[0] === z && l[1],
                            b = p),
                            !1 === b)
                                for (; (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++b || (y && (d = f[H] || (f[H] = {}),
                                c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                c[t] = [z, b]),
                                f !== e)); )
                                    ;
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var o, r = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[H] ? r(n) : r.length > 1 ? (o = [t, t, "", n],
                    x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = r(t, n), a = o.length; a--; )
                            i = J(t, o[a]),
                            t[i] = !(e[i] = o[a])
                    }) : function(t) {
                        return r(t, 0, o)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = []
                      , n = []
                      , o = A(t.replace(rt, "$1"));
                    return o[H] ? i(function(t, e, n, i) {
                        for (var r, a = o(t, null, i, []), s = t.length; s--; )
                            (r = a[s]) && (t[s] = !(e[s] = r))
                    }) : function(t, i, r) {
                        return e[0] = t,
                        o(e, null, r, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(yt, bt),
                    function(e) {
                        return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return ct.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(yt, bt).toLowerCase(),
                    function(e) {
                        var n;
                        do {
                            if (n = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === N
                },
                focus: function(t) {
                    return t === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return pt.test(t.nodeName)
                },
                input: function(t) {
                    return ft.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(t, e) {
                    return [e - 1]
                }),
                eq: s(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: s(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: s(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: s(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0; )
                        t.push(i);
                    return t
                }),
                gt: s(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        },
        x.pseudos.nth = x.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[y] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            x.pseudos[y] = function(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(y);
        return l.prototype = x.filters = x.pseudos,
        x.setFilters = new l,
        C = e.tokenize = function(t, n) {
            var i, o, r, a, s, u, l, c = I[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = t,
            u = [],
            l = x.preFilter; s; ) {
                (!i || (o = at.exec(s))) && (o && (s = s.slice(o[0].length) || s),
                u.push(r = [])),
                i = !1,
                (o = st.exec(s)) && (i = o.shift(),
                r.push({
                    value: i,
                    type: o[0].replace(rt, " ")
                }),
                s = s.slice(i.length));
                for (a in x.filter)
                    !(o = dt[a].exec(s)) || l[a] && !(o = l[a](o)) || (i = o.shift(),
                    r.push({
                        value: i,
                        type: a,
                        matches: o
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return n ? s.length : s ? e.error(t) : I(t, u).slice(0)
        }
        ,
        A = e.compile = function(t, e) {
            var n, i = [], o = [], r = P[t + " "];
            if (!r) {
                for (e || (e = C(t)),
                n = e.length; n--; )
                    r = v(e[n]),
                    r[H] ? i.push(r) : o.push(r);
                r = P(t, m(o, i)),
                r.selector = t
            }
            return r
        }
        ,
        T = e.select = function(t, e, n, i) {
            var o, r, a, s, l, d = "function" == typeof t && t, f = !i && C(t = d.selector || t);
            if (n = n || [],
            1 === f.length) {
                if (r = f[0] = f[0].slice(0),
                r.length > 2 && "ID" === (a = r[0]).type && b.getById && 9 === e.nodeType && $ && x.relative[r[1].type]) {
                    if (!(e = (x.find.ID(a.matches[0].replace(yt, bt), e) || [])[0]))
                        return n;
                    d && (e = e.parentNode),
                    t = t.slice(r.shift().value.length)
                }
                for (o = dt.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o],
                !x.relative[s = a.type]); )
                    if ((l = x.find[s]) && (i = l(a.matches[0].replace(yt, bt), vt.test(r[0].type) && u(e.parentNode) || e))) {
                        if (r.splice(o, 1),
                        !(t = i.length && c(r)))
                            return Y.apply(n, i),
                            n;
                        break
                    }
            }
            return (d || A(t, f))(i, e, !$, n, !e || vt.test(t) && u(e.parentNode) || e),
            n
        }
        ,
        b.sortStable = H.split("").sort(W).join("") === H,
        b.detectDuplicates = !!D,
        _(),
        b.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(S.createElement("div"))
        }),
        o(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        b.attributes && o(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(Z, function(t, e, n) {
            var i;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
        e
    }(t);
    pt.find = gt,
    pt.expr = gt.selectors,
    pt.expr[":"] = pt.expr.pseudos,
    pt.uniqueSort = pt.unique = gt.uniqueSort,
    pt.text = gt.getText,
    pt.isXMLDoc = gt.isXML,
    pt.contains = gt.contains;
    var vt = function(t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (o && pt(t).is(n))
                    break;
                i.push(t)
            }
        return i
    }
      , mt = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , yt = pt.expr.match.needsContext
      , bt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , xt = /^.[^:#\[\.,]*$/;
    pt.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? pt.find.matchesSelector(i, t) ? [i] : [] : pt.find.matches(t, pt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    pt.fn.extend({
        find: function(t) {
            var e, n = [], i = this, o = i.length;
            if ("string" != typeof t)
                return this.pushStack(pt(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (pt.contains(i[e], this))
                            return !0
                }));
            for (e = 0; o > e; e++)
                pt.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? pt.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + t : t,
            n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && yt.test(t) ? pt(t) : t || [], !1).length
        }
    });
    var wt, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pt.fn.init = function(t, e, n) {
        var i, o;
        if (!t)
            return this;
        if (n = n || wt,
        "string" == typeof t) {
            if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Et.exec(t)) || !i[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof pt ? e[0] : e,
                pt.merge(this, pt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)),
                bt.test(i[1]) && pt.isPlainObject(e))
                    for (i in e)
                        pt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if ((o = it.getElementById(i[2])) && o.parentNode) {
                if (o.id !== i[2])
                    return wt.find(t);
                this.length = 1,
                this[0] = o
            }
            return this.context = it,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : pt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(pt) : (void 0 !== t.selector && (this.selector = t.selector,
        this.context = t.context),
        pt.makeArray(t, this))
    }
    ).prototype = pt.fn,
    wt = pt(it);
    var Ct = /^(?:parents|prev(?:Until|All))/
      , At = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pt.fn.extend({
        has: function(t) {
            var e, n = pt(t, this), i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (pt.contains(this, n[e]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], a = yt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pt.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? pt.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    pt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return vt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return vt(t, "parentNode", n)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return vt(t, "nextSibling")
        },
        prevAll: function(t) {
            return vt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return vt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return vt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return mt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return mt(t.firstChild)
        },
        contents: function(t) {
            return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes)
        }
    }, function(t, e) {
        pt.fn[t] = function(n, i) {
            var o = pt.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (o = pt.filter(i, o)),
            this.length > 1 && (At[t] || (o = pt.uniqueSort(o)),
            Ct.test(t) && (o = o.reverse())),
            this.pushStack(o)
        }
    });
    var Tt = /\S+/g;
    pt.Callbacks = function(t) {
        t = "string" == typeof t ? r(t) : pt.extend({}, t);
        var e, n, i, o, a = [], s = [], u = -1, l = function() {
            for (o = t.once,
            i = e = !0; s.length; u = -1)
                for (n = s.shift(); ++u < a.length; )
                    !1 === a[u].apply(n[0], n[1]) && t.stopOnFalse && (u = a.length,
                    n = !1);
            t.memory || (n = !1),
            e = !1,
            o && (a = n ? [] : "")
        }, c = {
            add: function() {
                return a && (n && !e && (u = a.length - 1,
                s.push(n)),
                function e(n) {
                    pt.each(n, function(n, i) {
                        pt.isFunction(i) ? t.unique && c.has(i) || a.push(i) : i && i.length && "string" !== pt.type(i) && e(i)
                    })
                }(arguments),
                n && !e && l()),
                this
            },
            remove: function() {
                return pt.each(arguments, function(t, e) {
                    for (var n; (n = pt.inArray(e, a, n)) > -1; )
                        a.splice(n, 1),
                        u >= n && u--
                }),
                this
            },
            has: function(t) {
                return t ? pt.inArray(t, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return o = s = [],
                a = n = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return o = !0,
                n || c.disable(),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(t, n) {
                return o || (n = n || [],
                n = [t, n.slice ? n.slice() : n],
                s.push(n),
                e || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    pt.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", pt.Callbacks("once memory"), "resolved"], ["reject", "fail", pt.Callbacks("once memory"), "rejected"], ["notify", "progress", pt.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return pt.Deferred(function(n) {
                        pt.each(e, function(e, r) {
                            var a = pt.isFunction(t[e]) && t[e];
                            o[r[1]](function() {
                                var t = a && a.apply(this, arguments);
                                t && pt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? pt.extend(t, i) : i
                }
            }
              , o = {};
            return i.pipe = i.then,
            pt.each(e, function(t, r) {
                var a = r[2]
                  , s = r[3];
                i[r[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock),
                o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments),
                    this
                }
                ,
                o[r[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(t) {
            var e, n, i, o = 0, r = ot.call(arguments), a = r.length, s = 1 !== a || t && pt.isFunction(t.promise) ? a : 0, u = 1 === s ? t : pt.Deferred(), l = function(t, n, i) {
                return function(o) {
                    n[t] = this,
                    i[t] = arguments.length > 1 ? ot.call(arguments) : o,
                    i === e ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
                }
            };
            if (a > 1)
                for (e = new Array(a),
                n = new Array(a),
                i = new Array(a); a > o; o++)
                    r[o] && pt.isFunction(r[o].promise) ? r[o].promise().progress(l(o, n, e)).done(l(o, i, r)).fail(u.reject) : --s;
            return s || u.resolveWith(i, r),
            u.promise()
        }
    });
    var Ft;
    pt.fn.ready = function(t) {
        return pt.ready.promise().done(t),
        this
    }
    ,
    pt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? pt.readyWait++ : pt.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --pt.readyWait : pt.isReady) || (pt.isReady = !0,
            !0 !== t && --pt.readyWait > 0 || (Ft.resolveWith(it, [pt]),
            pt.fn.triggerHandler && (pt(it).triggerHandler("ready"),
            pt(it).off("ready"))))
        }
    }),
    pt.ready.promise = function(e) {
        if (!Ft)
            if (Ft = pt.Deferred(),
            "complete" === it.readyState)
                t.setTimeout(pt.ready);
            else if (it.addEventListener)
                it.addEventListener("DOMContentLoaded", s),
                t.addEventListener("load", s);
            else {
                it.attachEvent("onreadystatechange", s),
                t.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == t.frameElement && it.documentElement
                } catch (t) {}
                n && n.doScroll && function e() {
                    if (!pt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return t.setTimeout(e, 50)
                        }
                        a(),
                        pt.ready()
                    }
                }()
            }
        return Ft.promise(e)
    }
    ,
    pt.ready.promise();
    var kt;
    for (kt in pt(dt))
        break;
    dt.ownFirst = "0" === kt,
    dt.inlineBlockNeedsLayout = !1,
    pt(function() {
        var t, e, n, i;
        (n = it.getElementsByTagName("body")[0]) && n.style && (e = it.createElement("div"),
        i = it.createElement("div"),
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(e),
        void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth,
        t && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var t = it.createElement("div");
        dt.deleteExpando = !0;
        try {
            delete t.test
        } catch (t) {
            dt.deleteExpando = !1
        }
        t = null
    }();
    var Dt = function(t) {
        var e = pt.noData[(t.nodeName + " ").toLowerCase()]
          , n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
    }
      , _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , St = /([A-Z])/g;
    pt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando]) && !l(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }),
    pt.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0], a = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = pt.data(r),
                1 === r.nodeType && !pt._data(r, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (i = a[n].name,
                        0 === i.indexOf("data-") && (i = pt.camelCase(i.slice(5)),
                        u(r, i, o[i])));
                    pt._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                pt.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                pt.data(this, t, e)
            }) : r ? u(r, t, pt.data(r, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                pt.removeData(this, t)
            })
        }
    }),
    pt.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue",
            i = pt._data(t, e),
            n && (!i || pt.isArray(n) ? i = pt._data(t, e, pt.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = pt.queue(t, e)
              , i = n.length
              , o = n.shift()
              , r = pt._queueHooks(t, e)
              , a = function() {
                pt.dequeue(t, e)
            };
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === e && n.unshift("inprogress"),
            delete r.stop,
            o.call(t, a, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return pt._data(t, n) || pt._data(t, n, {
                empty: pt.Callbacks("once memory").add(function() {
                    pt._removeData(t, e + "queue"),
                    pt._removeData(t, n)
                })
            })
        }
    }),
    pt.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            n--),
            arguments.length < n ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = pt.queue(this, t, e);
                pt._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && pt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                pt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, o = pt.Deferred(), r = this, a = this.length, s = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; a--; )
                (n = pt._data(r[a], t + "queueHooks")) && n.empty && (i++,
                n.empty.add(s));
            return s(),
            o.promise(e)
        }
    }),
    function() {
        var t;
        dt.shrinkWrapBlocks = function() {
            if (null != t)
                return t;
            t = !1;
            var e, n, i;
            return n = it.getElementsByTagName("body")[0],
            n && n.style ? (e = it.createElement("div"),
            i = it.createElement("div"),
            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(i).appendChild(e),
            void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            e.appendChild(it.createElement("div")).style.width = "5px",
            t = 3 !== e.offsetWidth),
            n.removeChild(i),
            t) : void 0
        }
    }();
    var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , $t = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$","i")
      , Bt = ["Top", "Right", "Bottom", "Left"]
      , jt = function(t, e) {
        return t = e || t,
        "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
    }
      , Lt = function(t, e, n, i, o, r, a) {
        var s = 0
          , u = t.length
          , l = null == n;
        if ("object" === pt.type(n)) {
            o = !0;
            for (s in n)
                Lt(t, e, s, n[s], !0, r, a)
        } else if (void 0 !== i && (o = !0,
        pt.isFunction(i) || (a = !0),
        l && (a ? (e.call(t, i),
        e = null) : (l = e,
        e = function(t, e, n) {
            return l.call(pt(t), n)
        }
        )),
        e))
            for (; u > s; s++)
                e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
        return o ? t : l ? e.call(t) : u ? e(t[0], n) : r
    }
      , Mt = /^(?:checkbox|radio)$/i
      , Ht = /<([\w:-]+)/
      , qt = /^$|\/(?:java|ecma)script/i
      , zt = /^\s+/
      , Rt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var t = it.createElement("div")
          , e = it.createDocumentFragment()
          , n = it.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        dt.leadingWhitespace = 3 === t.firstChild.nodeType,
        dt.tbody = !t.getElementsByTagName("tbody").length,
        dt.htmlSerialize = !!t.getElementsByTagName("link").length,
        dt.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        e.appendChild(n),
        dt.appendChecked = n.checked,
        t.innerHTML = "<textarea>x</textarea>",
        dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        e.appendChild(t),
        n = it.createElement("input"),
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        dt.noCloneEvent = !!t.addEventListener,
        t[pt.expando] = 1,
        dt.attributes = !t.getAttribute(pt.expando)
    }();
    var Ot = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ot.optgroup = Ot.option,
    Ot.tbody = Ot.tfoot = Ot.colgroup = Ot.caption = Ot.thead,
    Ot.th = Ot.td;
    var It = /<|&#?\w+;/
      , Pt = /<tbody/i;
    !function() {
        var e, n, i = it.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + e,
            (dt[e] = n in t) || (i.setAttribute(n, "t"),
            dt[e] = !1 === i.attributes[n].expando);
        i = null
    }();
    var Wt = /^(?:input|select|textarea)$/i
      , Ut = /^key/
      , Xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Vt = /^(?:focusinfocus|focusoutblur)$/
      , Gt = /^([^.]*)(?:\.(.+)|)/;
    pt.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, a, s, u, l, c, d, f, p, h, g, v = pt._data(t);
            if (v) {
                for (n.handler && (u = n,
                n = u.handler,
                o = u.selector),
                n.guid || (n.guid = pt.guid++),
                (a = v.events) || (a = v.events = {}),
                (c = v.handle) || (c = v.handle = function(t) {
                    return void 0 === pt || t && pt.event.triggered === t.type ? void 0 : pt.event.dispatch.apply(c.elem, arguments)
                }
                ,
                c.elem = t),
                e = (e || "").match(Tt) || [""],
                s = e.length; s--; )
                    r = Gt.exec(e[s]) || [],
                    p = g = r[1],
                    h = (r[2] || "").split(".").sort(),
                    p && (l = pt.event.special[p] || {},
                    p = (o ? l.delegateType : l.bindType) || p,
                    l = pt.event.special[p] || {},
                    d = pt.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && pt.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, u),
                    (f = a[p]) || (f = a[p] = [],
                    f.delegateCount = 0,
                    l.setup && !1 !== l.setup.call(t, i, h, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))),
                    l.add && (l.add.call(t, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    o ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    pt.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var r, a, s, u, l, c, d, f, p, h, g, v = pt.hasData(t) && pt._data(t);
            if (v && (c = v.events)) {
                for (e = (e || "").match(Tt) || [""],
                l = e.length; l--; )
                    if (s = Gt.exec(e[l]) || [],
                    p = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = pt.event.special[p] || {},
                        p = (i ? d.delegateType : d.bindType) || p,
                        f = c[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        u = r = f.length; r--; )
                            a = f[r],
                            !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1),
                            a.selector && f.delegateCount--,
                            d.remove && d.remove.call(t, a));
                        u && !f.length && (d.teardown && !1 !== d.teardown.call(t, h, v.handle) || pt.removeEvent(t, p, v.handle),
                        delete c[p])
                    } else
                        for (p in c)
                            pt.event.remove(t, p + e[l], n, i, !0);
                pt.isEmptyObject(c) && (delete v.handle,
                pt._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, o) {
            var r, a, s, u, l, c, d, f = [i || it], p = ct.call(e, "type") ? e.type : e, h = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = c = i = i || it,
            3 !== i.nodeType && 8 !== i.nodeType && !Vt.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            a = p.indexOf(":") < 0 && "on" + p,
            e = e[pt.expando] ? e : new pt.Event(p,"object" == typeof e && e),
            e.isTrigger = o ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = i),
            n = null == n ? [e] : pt.makeArray(n, [e]),
            l = pt.event.special[p] || {},
            o || !l.trigger || !1 !== l.trigger.apply(i, n))) {
                if (!o && !l.noBubble && !pt.isWindow(i)) {
                    for (u = l.delegateType || p,
                    Vt.test(u + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        c = s;
                    c === (i.ownerDocument || it) && f.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0; (s = f[d++]) && !e.isPropagationStopped(); )
                    e.type = d > 1 ? u : l.bindType || p,
                    r = (pt._data(s, "events") || {})[e.type] && pt._data(s, "handle"),
                    r && r.apply(s, n),
                    (r = a && s[a]) && r.apply && Dt(s) && (e.result = r.apply(s, n),
                    !1 === e.result && e.preventDefault());
                if (e.type = p,
                !o && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(f.pop(), n)) && Dt(i) && a && i[p] && !pt.isWindow(i)) {
                    c = i[a],
                    c && (i[a] = null),
                    pt.event.triggered = p;
                    try {
                        i[p]()
                    } catch (t) {}
                    pt.event.triggered = void 0,
                    c && (i[a] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = pt.event.fix(t);
            var e, n, i, o, r, a = [], s = ot.call(arguments), u = (pt._data(this, "events") || {})[t.type] || [], l = pt.event.special[t.type] || {};
            if (s[0] = t,
            t.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                for (a = pt.event.handlers.call(this, t, u),
                e = 0; (o = a[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = o.elem,
                    n = 0; (r = o.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                        (!t.rnamespace || t.rnamespace.test(r.namespace)) && (t.handleObj = r,
                        t.data = r.data,
                        void 0 !== (i = ((pt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (t.result = i) && (t.preventDefault(),
                        t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, a = [], s = e.delegateCount, u = t.target;
            if (s && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== t.type)) {
                        for (i = [],
                        n = 0; s > n; n++)
                            r = e[n],
                            o = r.selector + " ",
                            void 0 === i[o] && (i[o] = r.needsContext ? pt(o, this).index(u) > -1 : pt.find(o, this, null, [u]).length),
                            i[o] && i.push(r);
                        i.length && a.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }),
            a
        },
        fix: function(t) {
            if (t[pt.expando])
                return t;
            var e, n, i, o = t.type, r = t, a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Xt.test(o) ? this.mouseHooks : Ut.test(o) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            t = new pt.Event(r),
            e = i.length; e--; )
                n = i[e],
                t[n] = r[n];
            return t.target || (t.target = r.srcElement || it),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            a.filter ? a.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, o, r = e.button, a = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it,
                o = i.documentElement,
                n = i.body,
                t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0),
                t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a),
                t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return pt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(t) {
                    return pt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var i = pt.extend(new pt.Event, n, {
                type: t,
                isSimulated: !0
            });
            pt.event.trigger(i, null, e),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    pt.removeEvent = it.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (void 0 === t[i] && (t[i] = null),
        t.detachEvent(i, n))
    }
    ,
    pt.Event = function(t, e) {
        return this instanceof pt.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? y : b) : this.type = t,
        e && pt.extend(this, e),
        this.timeStamp = t && t.timeStamp || pt.now(),
        void (this[pt.expando] = !0)) : new pt.Event(t,e)
    }
    ,
    pt.Event.prototype = {
        constructor: pt.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = y,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = y,
            t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(),
            t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    pt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        pt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, o = t.relatedTarget, r = t.handleObj;
                return (!o || o !== i && !pt.contains(i, o)) && (t.type = r.origType,
                n = r.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    dt.submit || (pt.event.special.submit = {
        setup: function() {
            return !pt.nodeName(this, "form") && void pt.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target
                  , n = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : void 0;
                n && !pt._data(n, "submit") && (pt.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }),
                pt._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble,
            this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return !pt.nodeName(this, "form") && void pt.event.remove(this, "._submit")
        }
    }),
    dt.change || (pt.event.special.change = {
        setup: function() {
            return Wt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (pt.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }),
            pt.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1),
                pt.event.simulate("change", this, t)
            })),
            !1) : void pt.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Wt.test(e.nodeName) && !pt._data(e, "change") && (pt.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t)
                }),
                pt._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return pt.event.remove(this, "._change"),
            !Wt.test(this.nodeName)
        }
    }),
    dt.focusin || pt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            pt.event.simulate(e, t.target, pt.event.fix(t))
        };
        pt.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , o = pt._data(i, e);
                o || i.addEventListener(t, n, !0),
                pt._data(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , o = pt._data(i, e) - 1;
                o ? pt._data(i, e, o) : (i.removeEventListener(t, n, !0),
                pt._removeData(i, e))
            }
        }
    }),
    pt.fn.extend({
        on: function(t, e, n, i) {
            return w(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return w(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj,
                pt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof t) {
                for (o in t)
                    this.off(o, e, t[o]);
                return this
            }
            return (!1 === e || "function" == typeof e) && (n = e,
            e = void 0),
            !1 === n && (n = b),
            this.each(function() {
                pt.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                pt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? pt.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Kt = new RegExp("<(?:" + Rt + ")[\\s/>]","i")
      , Yt = /<script|<style|<link/i
      , Qt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Jt = /^true\/(.*)/
      , Zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , te = p(it)
      , ee = te.appendChild(it.createElement("div"));
    pt.extend({
        htmlPrefilter: function(t) {
            return t.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, o, r, a, s, u = pt.contains(t.ownerDocument, t);
            if (dt.html5Clone || pt.isXMLDoc(t) || !Kt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (ee.innerHTML = t.outerHTML,
            ee.removeChild(r = ee.firstChild)),
            !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
                for (i = h(r),
                s = h(t),
                a = 0; null != (o = s[a]); ++a)
                    i[a] && F(o, i[a]);
            if (e)
                if (n)
                    for (s = s || h(t),
                    i = i || h(r),
                    a = 0; null != (o = s[a]); a++)
                        T(o, i[a]);
                else
                    T(t, r);
            return i = h(r, "script"),
            i.length > 0 && g(i, !u && h(t, "script")),
            i = s = o = null,
            r
        },
        cleanData: function(t, e) {
            for (var n, i, o, r, a = 0, s = pt.expando, u = pt.cache, l = dt.attributes, c = pt.event.special; null != (n = t[a]); a++)
                if ((e || Dt(n)) && (o = n[s],
                r = o && u[o])) {
                    if (r.events)
                        for (i in r.events)
                            c[i] ? pt.event.remove(n, i) : pt.removeEvent(n, i, r.handle);
                    u[o] && (delete u[o],
                    l || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s),
                    nt.push(o))
                }
        }
    }),
    pt.fn.extend({
        domManip: k,
        detach: function(t) {
            return D(this, t, !0)
        },
        remove: function(t) {
            return D(this, t)
        },
        text: function(t) {
            return Lt(this, function(t) {
                return void 0 === t ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return k(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    E(this, t).appendChild(t)
                }
            })
        },
        prepend: function() {
            return k(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = E(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return k(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return k(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && pt.cleanData(h(t, !1)); t.firstChild; )
                    t.removeChild(t.firstChild);
                t.options && pt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return pt.clone(this, t, e)
            })
        },
        html: function(t) {
            return Lt(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(/ jQuery\d+="(?:null|\d+)"/g, "") : void 0;
                if ("string" == typeof t && !Yt.test(t) && (dt.htmlSerialize || !Kt.test(t)) && (dt.leadingWhitespace || !zt.test(t)) && !Ot[(Ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = pt.htmlPrefilter(t);
                    try {
                        for (; i > n; n++)
                            e = this[n] || {},
                            1 === e.nodeType && (pt.cleanData(h(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return k(this, arguments, function(e) {
                var n = this.parentNode;
                pt.inArray(this, t) < 0 && (pt.cleanData(h(this)),
                n && n.replaceChild(e, this))
            }, t)
        }
    }),
    pt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        pt.fn[t] = function(t) {
            for (var n, i = 0, o = [], r = pt(t), a = r.length - 1; a >= i; i++)
                n = i === a ? this : this.clone(!0),
                pt(r[i])[e](n),
                at.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var ne, ie = {
        HTML: "block",
        BODY: "block"
    }, oe = /^margin/, re = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$","i"), ae = function(t, e, n, i) {
        var o, r, a = {};
        for (r in e)
            a[r] = t.style[r],
            t.style[r] = e[r];
        o = n.apply(t, i || []);
        for (r in e)
            t.style[r] = a[r];
        return o
    }, se = it.documentElement;
    !function() {
        function e() {
            var e, c, d = it.documentElement;
            d.appendChild(u),
            l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = o = s = !1,
            i = a = !0,
            t.getComputedStyle && (c = t.getComputedStyle(l),
            n = "1%" !== (c || {}).top,
            s = "2px" === (c || {}).marginLeft,
            o = "4px" === (c || {
                width: "4px"
            }).width,
            l.style.marginRight = "50%",
            i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight,
            e = l.appendChild(it.createElement("div")),
            e.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            e.style.marginRight = e.style.width = "0",
            l.style.width = "1px",
            a = !parseFloat((t.getComputedStyle(e) || {}).marginRight),
            l.removeChild(e)),
            l.style.display = "none",
            r = 0 === l.getClientRects().length,
            r && (l.style.display = "",
            l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            e = l.getElementsByTagName("td"),
            e[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            (r = 0 === e[0].offsetHeight) && (e[0].style.display = "",
            e[1].style.display = "none",
            r = 0 === e[0].offsetHeight)),
            d.removeChild(u)
        }
        var n, i, o, r, a, s, u = it.createElement("div"), l = it.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5",
        dt.opacity = "0.5" === l.style.opacity,
        dt.cssFloat = !!l.style.cssFloat,
        l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        dt.clearCloneStyle = "content-box" === l.style.backgroundClip,
        u = it.createElement("div"),
        u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        l.innerHTML = "",
        u.appendChild(l),
        dt.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing,
        pt.extend(dt, {
            reliableHiddenOffsets: function() {
                return null == n && e(),
                r
            },
            boxSizingReliable: function() {
                return null == n && e(),
                o
            },
            pixelMarginRight: function() {
                return null == n && e(),
                i
            },
            pixelPosition: function() {
                return null == n && e(),
                n
            },
            reliableMarginRight: function() {
                return null == n && e(),
                a
            },
            reliableMarginLeft: function() {
                return null == n && e(),
                s
            }
        }))
    }();
    var ue, le, ce = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ue = function(e) {
        var n = e.ownerDocument.defaultView;
        return n.opener || (n = t),
        n.getComputedStyle(e)
    }
    ,
    le = function(t, e, n) {
        var i, o, r, a, s = t.style;
        return n = n || ue(t),
        a = n ? n.getPropertyValue(e) || n[e] : void 0,
        n && ("" !== a || pt.contains(t.ownerDocument, t) || (a = pt.style(t, e)),
        !dt.pixelMarginRight() && re.test(a) && oe.test(e) && (i = s.width,
        o = s.minWidth,
        r = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = o,
        s.maxWidth = r)),
        void 0 === a ? a : a + ""
    }
    ) : se.currentStyle && (ue = function(t) {
        return t.currentStyle
    }
    ,
    le = function(t, e, n) {
        var i, o, r, a, s = t.style;
        return n = n || ue(t),
        a = n ? n[e] : void 0,
        null == a && s && s[e] && (a = s[e]),
        re.test(a) && !ce.test(e) && (i = s.left,
        o = t.runtimeStyle,
        r = o && o.left,
        r && (o.left = t.currentStyle.left),
        s.left = "fontSize" === e ? "1em" : a,
        a = s.pixelLeft + "px",
        s.left = i,
        r && (o.left = r)),
        void 0 === a ? a : a + "" || "auto"
    }
    );
    var de = /alpha\([^)]*\)/i
      , fe = /opacity\s*=\s*([^)]*)/i
      , pe = /^(none|table(?!-c[ea]).+)/
      , he = new RegExp("^(" + Nt + ")(.*)$","i")
      , ge = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , me = ["Webkit", "O", "Moz", "ms"]
      , ye = it.createElement("div").style;
    pt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = le(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: dt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, s = pt.camelCase(e), u = t.style;
                if (e = pt.cssProps[s] || (pt.cssProps[s] = $(s) || s),
                a = pt.cssHooks[e] || pt.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(t, !1, i)) ? o : u[e];
                if (r = typeof n,
                "string" === r && (o = $t.exec(n)) && o[1] && (n = f(t, e, o),
                r = "number"),
                null != n && n === n && ("number" === r && (n += o && o[3] || (pt.cssNumber[s] ? "" : "px")),
                dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                !(a && "set"in a && void 0 === (n = a.set(t, n, i)))))
                    try {
                        u[e] = n
                    } catch (t) {}
            }
        },
        css: function(t, e, n, i) {
            var o, r, a, s = pt.camelCase(e);
            return e = pt.cssProps[s] || (pt.cssProps[s] = $(s) || s),
            a = pt.cssHooks[e] || pt.cssHooks[s],
            a && "get"in a && (r = a.get(t, !0, n)),
            void 0 === r && (r = le(t, e, i)),
            "normal" === r && e in ve && (r = ve[e]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    pt.each(["height", "width"], function(t, e) {
        pt.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? pe.test(pt.css(t, "display")) && 0 === t.offsetWidth ? ae(t, ge, function() {
                    return M(t, e, i)
                }) : M(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var o = i && ue(t);
                return j(t, n, i ? L(t, e, i, dt.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    dt.opacity || (pt.cssHooks.opacity = {
        get: function(t, e) {
            return fe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style
              , i = t.currentStyle
              , o = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
              , r = i && i.filter || n.filter || "";
            n.zoom = 1,
            (e >= 1 || "" === e) && "" === pt.trim(r.replace(de, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === e || i && !i.filter) || (n.filter = de.test(r) ? r.replace(de, o) : r + " " + o)
        }
    }),
    pt.cssHooks.marginRight = N(dt.reliableMarginRight, function(t, e) {
        return e ? ae(t, {
            display: "inline-block"
        }, le, [t, "marginRight"]) : void 0
    }),
    pt.cssHooks.marginLeft = N(dt.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(le(t, "marginLeft")) || (pt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - ae(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    pt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        pt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    o[t + Bt[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        oe.test(t) || (pt.cssHooks[t + e].set = j)
    }),
    pt.fn.extend({
        css: function(t, e) {
            return Lt(this, function(t, e, n) {
                var i, o, r = {}, a = 0;
                if (pt.isArray(e)) {
                    for (i = ue(t),
                    o = e.length; o > a; a++)
                        r[e[a]] = pt.css(t, e[a], !1, i);
                    return r
                }
                return void 0 !== n ? pt.style(t, e, n) : pt.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                jt(this) ? pt(this).show() : pt(this).hide()
            })
        }
    }),
    pt.Tween = H,
    H.prototype = {
        constructor: H,
        init: function(t, e, n, i, o, r) {
            this.elem = t,
            this.prop = n,
            this.easing = o || pt.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (pt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = H.propHooks[this.prop];
            return t && t.get ? t.get(this) : H.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : H.propHooks._default.set(this),
            this
        }
    },
    H.prototype.init.prototype = H.prototype,
    H.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""),
                e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    pt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    pt.fx = H.prototype.init,
    pt.fx.step = {};
    var be, xe, we = /^(?:toggle|show|hide)$/, Ee = /queueHooks$/;
    pt.Animation = pt.extend(P, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return f(n.elem, t, $t.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            pt.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.match(Tt);
            for (var n, i = 0, o = t.length; o > i; i++)
                n = t[i],
                P.tweeners[n] = P.tweeners[n] || [],
                P.tweeners[n].unshift(e)
        },
        prefilters: [O],
        prefilter: function(t, e) {
            e ? P.prefilters.unshift(t) : P.prefilters.push(t)
        }
    }),
    pt.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? pt.extend({}, t) : {
            complete: n || !n && e || pt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !pt.isFunction(e) && e
        };
        return i.duration = pt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pt.fx.speeds ? pt.fx.speeds[i.duration] : pt.fx.speeds._default,
        (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            pt.isFunction(i.old) && i.old.call(this),
            i.queue && pt.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    pt.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(jt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = pt.isEmptyObject(t)
              , r = pt.speed(e, n, i)
              , a = function() {
                var e = P(this, pt.extend({}, t), r);
                (o || pt._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e,
            e = t,
            t = void 0),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , o = null != t && t + "queueHooks"
                  , r = pt.timers
                  , a = pt._data(this);
                if (o)
                    a[o] && a[o].stop && i(a[o]);
                else
                    for (o in a)
                        a[o] && a[o].stop && Ee.test(o) && i(a[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n),
                    e = !1,
                    r.splice(o, 1));
                (e || !n) && pt.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, n = pt._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = pt.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                pt.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; a > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    pt.each(["toggle", "show", "hide"], function(t, e) {
        var n = pt.fn[e];
        pt.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, o)
        }
    }),
    pt.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        pt.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    pt.timers = [],
    pt.fx.tick = function() {
        var t, e = pt.timers, n = 0;
        for (be = pt.now(); n < e.length; n++)
            (t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || pt.fx.stop(),
        be = void 0
    }
    ,
    pt.fx.timer = function(t) {
        pt.timers.push(t),
        t() ? pt.fx.start() : pt.timers.pop()
    }
    ,
    pt.fx.interval = 13,
    pt.fx.start = function() {
        xe || (xe = t.setInterval(pt.fx.tick, pt.fx.interval))
    }
    ,
    pt.fx.stop = function() {
        t.clearInterval(xe),
        xe = null
    }
    ,
    pt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    pt.fn.delay = function(e, n) {
        return e = pt.fx ? pt.fx.speeds[e] || e : e,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var t, e = it.createElement("input"), n = it.createElement("div"), i = it.createElement("select"), o = i.appendChild(it.createElement("option"));
        n = it.createElement("div"),
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        t = n.getElementsByTagName("a")[0],
        e.setAttribute("type", "checkbox"),
        n.appendChild(e),
        t = n.getElementsByTagName("a")[0],
        t.style.cssText = "top:1px",
        dt.getSetAttribute = "t" !== n.className,
        dt.style = /top/.test(t.getAttribute("style")),
        dt.hrefNormalized = "/a" === t.getAttribute("href"),
        dt.checkOn = !!e.value,
        dt.optSelected = o.selected,
        dt.enctype = !!it.createElement("form").enctype,
        i.disabled = !0,
        dt.optDisabled = !o.disabled,
        e = it.createElement("input"),
        e.setAttribute("value", ""),
        dt.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        dt.radioValue = "t" === e.value
    }();
    pt.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = pt.isFunction(t),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? t.call(this, n, pt(this).val()) : t,
                null == o ? o = "" : "number" == typeof o ? o += "" : pt.isArray(o) && (o = pt.map(o, function(t) {
                    return null == t ? "" : t + ""
                })),
                (e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = pt.valHooks[o.type] || pt.valHooks[o.nodeName.toLowerCase()],
            e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value,
            "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)) : void 0
        }
    }),
    pt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = pt.find.attr(t, "value");
                    return null != e ? e : pt.trim(pt.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, u = 0 > o ? s : r ? o : 0; s > u; u++)
                        if (n = i[u],
                        (n.selected || u === o) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = pt(n).val(),
                            r)
                                return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = pt.makeArray(e), a = o.length; a--; )
                        if (i = o[a],
                        pt.inArray(pt.valHooks.option.get(i), r) >= 0)
                            try {
                                i.selected = n = !0
                            } catch (t) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (t.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    pt.each(["radio", "checkbox"], function() {
        pt.valHooks[this] = {
            set: function(t, e) {
                return pt.isArray(e) ? t.checked = pt.inArray(pt(t).val(), e) > -1 : void 0
            }
        },
        dt.checkOn || (pt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var Ce, Ae, Te = pt.expr.attrHandle, Fe = /^(?:checked|selected)$/i, ke = dt.getSetAttribute, De = dt.input;
    pt.fn.extend({
        attr: function(t, e) {
            return Lt(this, pt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                pt.removeAttr(this, t)
            })
        }
    }),
    pt.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === t.getAttribute ? pt.prop(t, e, n) : (1 === r && pt.isXMLDoc(t) || (e = e.toLowerCase(),
                o = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? Ae : Ce)),
                void 0 !== n ? null === n ? void pt.removeAttr(t, e) : o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                n) : o && "get"in o && null !== (i = o.get(t, e)) ? i : (i = pt.find.attr(t, e),
                null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, o = 0, r = e && e.match(Tt);
            if (r && 1 === t.nodeType)
                for (; n = r[o++]; )
                    i = pt.propFix[n] || n,
                    pt.expr.match.bool.test(n) ? De && ke || !Fe.test(n) ? t[i] = !1 : t[pt.camelCase("default-" + n)] = t[i] = !1 : pt.attr(t, n, ""),
                    t.removeAttribute(ke ? n : i)
        }
    }),
    Ae = {
        set: function(t, e, n) {
            return !1 === e ? pt.removeAttr(t, n) : De && ke || !Fe.test(n) ? t.setAttribute(!ke && pt.propFix[n] || n, n) : t[pt.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    pt.each(pt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Te[e] || pt.find.attr;
        De && ke || !Fe.test(e) ? Te[e] = function(t, e, i) {
            var o, r;
            return i || (r = Te[e],
            Te[e] = o,
            o = null != n(t, e, i) ? e.toLowerCase() : null,
            Te[e] = r),
            o
        }
        : Te[e] = function(t, e, n) {
            return n ? void 0 : t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    De && ke || (pt.attrHooks.value = {
        set: function(t, e, n) {
            return pt.nodeName(t, "input") ? void (t.defaultValue = e) : Ce && Ce.set(t, e, n)
        }
    }),
    ke || (Ce = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)),
            i.value = e += "",
            "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    },
    Te.id = Te.name = Te.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }
    ,
    pt.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: Ce.set
    },
    pt.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Ce.set(t, "" !== e && e, n)
        }
    },
    pt.each(["width", "height"], function(t, e) {
        pt.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"),
                n) : void 0
            }
        }
    })),
    dt.style || (pt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var _e = /^(?:input|select|textarea|button|object)$/i
      , Se = /^(?:a|area)$/i;
    pt.fn.extend({
        prop: function(t, e) {
            return Lt(this, pt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = pt.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch (t) {}
            })
        }
    }),
    pt.extend({
        prop: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && pt.isXMLDoc(t) || (e = pt.propFix[e] || e,
                o = pt.propHooks[e]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = pt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : _e.test(t.nodeName) || Se.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    dt.hrefNormalized || pt.each(["href", "src"], function(t, e) {
        pt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    dt.optSelected || (pt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex),
            null
        }
    }),
    pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pt.propFix[this.toLowerCase()] = this
    }),
    dt.enctype || (pt.propFix.enctype = "encoding");
    var Ne = /[\t\r\n\f]/g;
    pt.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, a, s, u = 0;
            if (pt.isFunction(t))
                return this.each(function(e) {
                    pt(this).addClass(t.call(this, e, W(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(Tt) || []; n = this[u++]; )
                    if (o = W(n),
                    i = 1 === n.nodeType && (" " + o + " ").replace(Ne, " ")) {
                        for (a = 0; r = e[a++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = pt.trim(i),
                        o !== s && pt.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a, s, u = 0;
            if (pt.isFunction(t))
                return this.each(function(e) {
                    pt(this).removeClass(t.call(this, e, W(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Tt) || []; n = this[u++]; )
                    if (o = W(n),
                    i = 1 === n.nodeType && (" " + o + " ").replace(Ne, " ")) {
                        for (a = 0; r = e[a++]; )
                            for (; i.indexOf(" " + r + " ") > -1; )
                                i = i.replace(" " + r + " ", " ");
                        s = pt.trim(i),
                        o !== s && pt.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function(n) {
                pt(this).toggleClass(t.call(this, n, W(this), e), e)
            }) : this.each(function() {
                var e, i, o, r;
                if ("string" === n)
                    for (i = 0,
                    o = pt(this),
                    r = t.match(Tt) || []; e = r[i++]; )
                        o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else
                    (void 0 === t || "boolean" === n) && (e = W(this),
                    e && pt._data(this, "__className__", e),
                    pt.attr(this, "class", e || !1 === t ? "" : pt._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + W(n) + " ").replace(Ne, " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    }),
    pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        pt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    pt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var $e = t.location
      , Be = pt.now()
      , je = /\?/;
    pt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n, i = null, o = pt.trim(e + "");
        return o && !pt.trim(o.replace(/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g, function(t, e, o, r) {
            return n && e && (i = 0),
            0 === i ? t : (n = o || e,
            i += !r - !o,
            "")
        })) ? Function("return " + o)() : pt.error("Invalid JSON: " + e)
    }
    ,
    pt.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (i = new t.DOMParser,
            n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(e))
        } catch (t) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e),
        n
    }
    ;
    var Le = /([?&])_=[^&]*/
      , Me = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , He = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , qe = /^(?:GET|HEAD)$/
      , ze = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Re = {}
      , Oe = {}
      , Ie = "*/".concat("*")
      , Pe = $e.href
      , We = ze.exec(Pe.toLowerCase()) || [];
    pt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Pe,
            type: "GET",
            isLocal: He.test(We[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ie,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pt.parseJSON,
                "text xml": pt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? V(V(t, pt.ajaxSettings), e) : V(pt.ajaxSettings, t)
        },
        ajaxPrefilter: U(Re),
        ajaxTransport: U(Oe),
        ajax: function(e, n) {
            function i(e, n, i, o) {
                var r, d, y, b, w, C = n;
                2 !== x && (x = 2,
                u && t.clearTimeout(u),
                c = void 0,
                s = o || "",
                E.readyState = e > 0 ? 4 : 0,
                r = e >= 200 && 300 > e || 304 === e,
                i && (b = G(f, E, i)),
                b = K(f, b, E, r),
                r ? (f.ifModified && (w = E.getResponseHeader("Last-Modified"),
                w && (pt.lastModified[a] = w),
                (w = E.getResponseHeader("etag")) && (pt.etag[a] = w)),
                204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state,
                d = b.data,
                y = b.error,
                r = !y)) : (y = C,
                (e || !C) && (C = "error",
                0 > e && (e = 0))),
                E.status = e,
                E.statusText = (n || C) + "",
                r ? g.resolveWith(p, [d, C, E]) : g.rejectWith(p, [E, C, y]),
                E.statusCode(m),
                m = void 0,
                l && h.trigger(r ? "ajaxSuccess" : "ajaxError", [E, f, r ? d : y]),
                v.fireWith(p, [E, C]),
                l && (h.trigger("ajaxComplete", [E, f]),
                --pt.active || pt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e,
            e = void 0),
            n = n || {};
            var o, r, a, s, u, l, c, d, f = pt.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? pt(p) : pt.event, g = pt.Deferred(), v = pt.Callbacks("once memory"), m = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === x) {
                        if (!d)
                            for (d = {}; e = Me.exec(s); )
                                d[e[1].toLowerCase()] = e[2];
                        e = d[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return x || (t = b[n] = b[n] || t,
                    y[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return x || (f.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > x)
                            for (e in t)
                                m[e] = [m[e], t[e]];
                        else
                            E.always(t[E.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return c && c.abort(e),
                    i(0, e),
                    this
                }
            };
            if (g.promise(E).complete = v.add,
            E.success = E.done,
            E.error = E.fail,
            f.url = ((e || f.url || Pe) + "").replace(/#.*$/, "").replace(/^\/\//, We[1] + "//"),
            f.type = n.method || n.type || f.method || f.type,
            f.dataTypes = pt.trim(f.dataType || "*").toLowerCase().match(Tt) || [""],
            null == f.crossDomain && (o = ze.exec(f.url.toLowerCase()),
            f.crossDomain = !(!o || o[1] === We[1] && o[2] === We[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (We[3] || ("http:" === We[1] ? "80" : "443")))),
            f.data && f.processData && "string" != typeof f.data && (f.data = pt.param(f.data, f.traditional)),
            X(Re, f, n, E),
            2 === x)
                return E;
            l = pt.event && f.global,
            l && 0 == pt.active++ && pt.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !qe.test(f.type),
            a = f.url,
            f.hasContent || (f.data && (a = f.url += (je.test(a) ? "&" : "?") + f.data,
            delete f.data),
            !1 === f.cache && (f.url = Le.test(a) ? a.replace(Le, "$1_=" + Be++) : a + (je.test(a) ? "&" : "?") + "_=" + Be++)),
            f.ifModified && (pt.lastModified[a] && E.setRequestHeader("If-Modified-Since", pt.lastModified[a]),
            pt.etag[a] && E.setRequestHeader("If-None-Match", pt.etag[a])),
            (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && E.setRequestHeader("Content-Type", f.contentType),
            E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ie + "; q=0.01" : "") : f.accepts["*"]);
            for (r in f.headers)
                E.setRequestHeader(r, f.headers[r]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, E, f) || 2 === x))
                return E.abort();
            w = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            })
                E[r](f[r]);
            if (c = X(Oe, f, n, E)) {
                if (E.readyState = 1,
                l && h.trigger("ajaxSend", [E, f]),
                2 === x)
                    return E;
                f.async && f.timeout > 0 && (u = t.setTimeout(function() {
                    E.abort("timeout")
                }, f.timeout));
                try {
                    x = 1,
                    c.send(y, i)
                } catch (t) {
                    if (!(2 > x))
                        throw t;
                    i(-1, t)
                }
            } else
                i(-1, "No Transport");
            return E
        },
        getJSON: function(t, e, n) {
            return pt.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return pt.get(t, void 0, e, "script")
        }
    }),
    pt.each(["get", "post"], function(t, e) {
        pt[e] = function(t, n, i, o) {
            return pt.isFunction(n) && (o = o || i,
            i = n,
            n = void 0),
            pt.ajax(pt.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, pt.isPlainObject(t) && t))
        }
    }),
    pt._evalUrl = function(t) {
        return pt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    pt.fn.extend({
        wrapAll: function(t) {
            if (pt.isFunction(t))
                return this.each(function(e) {
                    pt(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return pt.isFunction(t) ? this.each(function(e) {
                pt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = pt(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = pt.isFunction(t);
            return this.each(function(n) {
                pt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    pt.expr.filters.hidden = function(t) {
        return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Q(t)
    }
    ,
    pt.expr.filters.visible = function(t) {
        return !pt.expr.filters.hidden(t)
    }
    ;
    var Ue = /\[\]$/
      , Xe = /^(?:submit|button|image|reset|file)$/i
      , Ve = /^(?:input|select|textarea|keygen)/i;
    pt.param = function(t, e) {
        var n, i = [], o = function(t, e) {
            e = pt.isFunction(e) ? e() : null == e ? "" : e,
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional),
        pt.isArray(t) || t.jquery && !pt.isPlainObject(t))
            pt.each(t, function() {
                o(this.name, this.value)
            });
        else
            for (n in t)
                J(n, t[n], e, o);
        return i.join("&").replace(/%20/g, "+")
    }
    ,
    pt.fn.extend({
        serialize: function() {
            return pt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = pt.prop(this, "elements");
                return t ? pt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !pt(this).is(":disabled") && Ve.test(this.nodeName) && !Xe.test(t) && (this.checked || !Mt.test(t))
            }).map(function(t, e) {
                var n = pt(this).val();
                return null == n ? null : pt.isArray(n) ? pt.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    }),
    pt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? tt() : it.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    }
    : Z;
    var Ge = 0
      , Ke = {}
      , Ye = pt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ke)
            Ke[t](void 0, !0)
    }),
    dt.cors = !!Ye && "withCredentials"in Ye,
    (Ye = dt.ajax = !!Ye) && pt.ajaxTransport(function(e) {
        if (!e.crossDomain || dt.cors) {
            var n;
            return {
                send: function(i, o) {
                    var r, a = e.xhr(), s = ++Ge;
                    if (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (r in e.xhrFields)
                            a[r] = e.xhrFields[r];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i)
                        void 0 !== i[r] && a.setRequestHeader(r, i[r] + "");
                    a.send(e.hasContent && e.data || null),
                    n = function(t, i) {
                        var r, u, l;
                        if (n && (i || 4 === a.readyState))
                            if (delete Ke[s],
                            n = void 0,
                            a.onreadystatechange = pt.noop,
                            i)
                                4 !== a.readyState && a.abort();
                            else {
                                l = {},
                                r = a.status,
                                "string" == typeof a.responseText && (l.text = a.responseText);
                                try {
                                    u = a.statusText
                                } catch (t) {
                                    u = ""
                                }
                                r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = l.text ? 200 : 404
                            }
                        l && o(r, u, l, a.getAllResponseHeaders())
                    }
                    ,
                    e.async ? 4 === a.readyState ? t.setTimeout(n) : a.onreadystatechange = Ke[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    pt.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    pt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return pt.globalEval(t),
                t
            }
        }
    }),
    pt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET",
        t.global = !1)
    }),
    pt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = it.head || pt("head")[0] || it.documentElement;
            return {
                send: function(i, o) {
                    e = it.createElement("script"),
                    e.async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null,
                        e.parentNode && e.parentNode.removeChild(e),
                        e = null,
                        n || o(200, "success"))
                    }
                    ,
                    n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var Qe = []
      , Je = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Qe.pop() || pt.expando + "_" + Be++;
            return this[t] = !0,
            t
        }
    }),
    pt.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, a, s = !1 !== e.jsonp && (Je.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Je.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        s ? e[s] = e[s].replace(Je, "$1" + o) : !1 !== e.jsonp && (e.url += (je.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
        e.converters["script json"] = function() {
            return a || pt.error(o + " was not called"),
            a[0]
        }
        ,
        e.dataTypes[0] = "json",
        r = t[o],
        t[o] = function() {
            a = arguments
        }
        ,
        i.always(function() {
            void 0 === r ? pt(t).removeProp(o) : t[o] = r,
            e[o] && (e.jsonpCallback = n.jsonpCallback,
            Qe.push(o)),
            a && pt.isFunction(r) && r(a[0]),
            a = r = void 0
        }),
        "script") : void 0
    }),
    dt.createHTMLDocument = function() {
        if (!it.implementation.createHTMLDocument)
            return !1;
        var t = it.implementation.createHTMLDocument("");
        return t.body.innerHTML = "<form></form><form></form>",
        2 === t.body.childNodes.length
    }(),
    pt.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e,
        e = !1),
        e = e || (dt.createHTMLDocument ? it.implementation.createHTMLDocument("") : it);
        var i = bt.exec(t)
          , o = !n && [];
        return i ? [e.createElement(i[1])] : (i = m([t], e, o),
        o && o.length && pt(o).remove(),
        pt.merge([], i.childNodes))
    }
    ;
    var Ze = pt.fn.load;
    pt.fn.load = function(t, e, n) {
        if ("string" != typeof t && Ze)
            return Ze.apply(this, arguments);
        var i, o, r, a = this, s = t.indexOf(" ");
        return s > -1 && (i = pt.trim(t.slice(s, t.length)),
        t = t.slice(0, s)),
        pt.isFunction(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (o = "POST"),
        a.length > 0 && pt.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments,
            a.html(i ? pt("<div>").append(pt.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            a.each(function() {
                n.apply(a, r || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        pt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    pt.expr.filters.animated = function(t) {
        return pt.grep(pt.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    pt.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, a, s, u, l, c = pt.css(t, "position"), d = pt(t), f = {};
            "static" === c && (t.style.position = "relative"),
            s = d.offset(),
            r = pt.css(t, "top"),
            u = pt.css(t, "left"),
            l = ("absolute" === c || "fixed" === c) && pt.inArray("auto", [r, u]) > -1,
            l ? (i = d.position(),
            a = i.top,
            o = i.left) : (a = parseFloat(r) || 0,
            o = parseFloat(u) || 0),
            pt.isFunction(e) && (e = e.call(t, n, pt.extend({}, s))),
            null != e.top && (f.top = e.top - s.top + a),
            null != e.left && (f.left = e.left - s.left + o),
            "using"in e ? e.using.call(t, f) : d.css(f)
        }
    },
    pt.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    pt.offset.setOffset(this, t, e)
                });
            var e, n, i = {
                top: 0,
                left: 0
            }, o = this[0], r = o && o.ownerDocument;
            return r ? (e = r.documentElement,
            pt.contains(e, o) ? (void 0 !== o.getBoundingClientRect && (i = o.getBoundingClientRect()),
            n = et(r),
            {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === pt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                pt.nodeName(t[0], "html") || (n = t.offset()),
                n.top += pt.css(t[0], "borderTopWidth", !0) - t.scrollTop(),
                n.left += pt.css(t[0], "borderLeftWidth", !0) - t.scrollLeft()),
                {
                    top: e.top - n.top - pt.css(i, "marginTop", !0),
                    left: e.left - n.left - pt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position"); )
                    t = t.offsetParent;
                return t || se
            })
        }
    }),
    pt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        pt.fn[t] = function(i) {
            return Lt(this, function(t, i, o) {
                var r = et(t);
                return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void (r ? r.scrollTo(n ? pt(r).scrollLeft() : o, n ? o : pt(r).scrollTop()) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }),
    pt.each(["top", "left"], function(t, e) {
        pt.cssHooks[e] = N(dt.pixelPosition, function(t, n) {
            return n ? (n = le(t, e),
            re.test(n) ? pt(t).position()[e] + "px" : n) : void 0
        })
    }),
    pt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        pt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            pt.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i)
                  , a = n || (!0 === i || !0 === o ? "margin" : "border");
                return Lt(this, function(e, n, i) {
                    var o;
                    return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                    Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? pt.css(e, n, a) : pt.style(e, n, i, a)
                }, e, r ? i : void 0, r, null)
            }
        })
    }),
    pt.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    pt.fn.size = function() {
        return this.length
    }
    ,
    pt.fn.andSelf = pt.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return pt
    });
    var tn = t.jQuery
      , en = t.$;
    return pt.noConflict = function(e) {
        return t.$ === pt && (t.$ = en),
        e && t.jQuery === pt && (t.jQuery = tn),
        pt
    }
    ,
    e || (t.jQuery = t.$ = pt),
    pt
}),
function(t, e, n) {
    function i(n, i, o) {
        var r = e.createElement(n);
        return i && (r.id = Z + i),
        o && (r.style.cssText = o),
        t(r)
    }
    function o() {
        return n.innerHeight ? n.innerHeight : t(n).height()
    }
    function r(e, n) {
        n !== Object(n) && (n = {}),
        this.cache = {},
        this.el = e,
        this.value = function(e) {
            var i;
            return void 0 === this.cache[e] && (i = t(this.el).attr("data-cbox-" + e),
            void 0 !== i ? this.cache[e] = i : void 0 !== n[e] ? this.cache[e] = n[e] : void 0 !== Q[e] && (this.cache[e] = Q[e])),
            this.cache[e]
        }
        ,
        this.get = function(e) {
            var n = this.value(e);
            return t.isFunction(n) ? n.call(this.el, this) : n
        }
    }
    function a(t) {
        var e = F.length
          , n = (P + t) % e;
        return 0 > n ? e + n : n
    }
    function s(t, e) {
        return Math.round((/%/.test(t) ? ("x" === e ? k.width() : o()) / 100 : 1) * parseInt(t, 10))
    }
    function u(t, e) {
        return t.get("photo") || t.get("photoRegex").test(e)
    }
    function l(t, e) {
        return t.get("retinaUrl") && n.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
    }
    function c(t) {
        "contains"in b[0] && !b[0].contains(t.target) && t.target !== y[0] && (t.stopPropagation(),
        b.focus())
    }
    function d(t) {
        d.str !== t && (b.add(y).removeClass(d.str).addClass(t),
        d.str = t)
    }
    function f(e) {
        P = 0,
        e && !1 !== e && "nofollow" !== e ? (F = t("." + tt).filter(function() {
            return new r(this,t.data(this, J)).get("rel") === e
        }),
        -1 === (P = F.index(q.el)) && (F = F.add(q.el),
        P = F.length - 1)) : F = t(q.el)
    }
    function p(n) {
        t(e).trigger(n),
        st.triggerHandler(n)
    }
    function h(n) {
        var o;
        if (!V) {
            if (o = t(n).data(J),
            q = new r(n,o),
            f(q.get("rel")),
            !U) {
                U = X = !0,
                d(q.get("className")),
                b.css({
                    visibility: "hidden",
                    display: "block",
                    opacity: ""
                }),
                D = i(ut, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"),
                w.css({
                    width: "",
                    height: ""
                }).append(D),
                z = E.height() + T.height() + w.outerHeight(!0) - w.height(),
                R = C.width() + A.width() + w.outerWidth(!0) - w.width(),
                O = D.outerHeight(!0),
                I = D.outerWidth(!0);
                var a = s(q.get("initialWidth"), "x")
                  , u = s(q.get("initialHeight"), "y")
                  , l = q.get("maxWidth")
                  , h = q.get("maxHeight");
                q.w = (!1 !== l ? Math.min(a, s(l, "x")) : a) - I - R,
                q.h = (!1 !== h ? Math.min(u, s(h, "y")) : u) - O - z,
                D.css({
                    width: "",
                    height: q.h
                }),
                K.position(),
                p(et),
                q.get("onOpen"),
                H.add(N).hide(),
                b.focus(),
                q.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", c, !0),
                st.one(rt, function() {
                    e.removeEventListener("focus", c, !0)
                })),
                q.get("returnFocus") && st.one(rt, function() {
                    t(q.el).focus()
                })
            }
            var g = parseFloat(q.get("opacity"));
            y.css({
                opacity: g === g ? g : "",
                cursor: q.get("overlayClose") ? "pointer" : "",
                visibility: "visible"
            }).show(),
            q.get("closeButton") ? M.html(q.get("close")).appendTo(w) : M.appendTo("<div/>"),
            m()
        }
    }
    function g() {
        b || (Y = !1,
        k = t(n),
        b = i(ut).attr({
            id: J,
            class: !1 === t.support.opacity ? Z + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(),
        y = i(ut, "Overlay").hide(),
        S = t([i(ut, "LoadingOverlay")[0], i(ut, "LoadingGraphic")[0]]),
        x = i(ut, "Wrapper"),
        w = i(ut, "Content").append(N = i(ut, "Title"), $ = i(ut, "Current"), L = t('<button type="button"/>').attr({
            id: Z + "Previous"
        }), j = t('<button type="button"/>').attr({
            id: Z + "Next"
        }), B = i("button", "Slideshow"), S),
        M = t('<button type="button"/>').attr({
            id: Z + "Close"
        }),
        x.append(i(ut).append(i(ut, "TopLeft"), E = i(ut, "TopCenter"), i(ut, "TopRight")), i(ut, !1, "clear:left").append(C = i(ut, "MiddleLeft"), w, A = i(ut, "MiddleRight")), i(ut, !1, "clear:left").append(i(ut, "BottomLeft"), T = i(ut, "BottomCenter"), i(ut, "BottomRight"))).find("div div").css({
            float: "left"
        }),
        _ = i(ut, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),
        H = j.add(L).add($).add(B)),
        e.body && !b.parent().length && t(e.body).append(y, b.append(x, _))
    }
    function v() {
        function n(t) {
            t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(),
            h(this))
        }
        return !!b && (Y || (Y = !0,
        j.click(function() {
            K.next()
        }),
        L.click(function() {
            K.prev()
        }),
        M.click(function() {
            K.close()
        }),
        y.click(function() {
            q.get("overlayClose") && K.close()
        }),
        t(e).bind("keydown." + Z, function(t) {
            var e = t.keyCode;
            U && q.get("escKey") && 27 === e && (t.preventDefault(),
            K.close()),
            U && q.get("arrowKey") && F[1] && !t.altKey && (37 === e ? (t.preventDefault(),
            L.click()) : 39 === e && (t.preventDefault(),
            j.click()))
        }),
        t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + tt, n) : t("." + tt).live("click." + Z, n)),
        !0)
    }
    function m() {
        var e, o, r, a = K.prep, c = ++lt;
        if (X = !0,
        W = !1,
        p(at),
        p(nt),
        q.get("onLoad"),
        q.h = q.get("height") ? s(q.get("height"), "y") - O - z : q.get("innerHeight") && s(q.get("innerHeight"), "y"),
        q.w = q.get("width") ? s(q.get("width"), "x") - I - R : q.get("innerWidth") && s(q.get("innerWidth"), "x"),
        q.mw = q.w,
        q.mh = q.h,
        q.get("maxWidth") && (q.mw = s(q.get("maxWidth"), "x") - I - R,
        q.mw = q.w && q.w < q.mw ? q.w : q.mw),
        q.get("maxHeight") && (q.mh = s(q.get("maxHeight"), "y") - O - z,
        q.mh = q.h && q.h < q.mh ? q.h : q.mh),
        e = q.get("href"),
        G = setTimeout(function() {
            S.show()
        }, 100),
        q.get("inline")) {
            var d = t(e);
            r = t("<div>").hide().insertBefore(d),
            st.one(at, function() {
                r.replaceWith(d)
            }),
            a(d)
        } else
            q.get("iframe") ? a(" ") : q.get("html") ? a(q.get("html")) : u(q, e) ? (e = l(q, e),
            W = new Image,
            t(W).addClass(Z + "Photo").bind("error", function() {
                a(i(ut, "Error").html(q.get("imgError")))
            }).one("load", function() {
                c === lt && setTimeout(function() {
                    var e;
                    t.each(["alt", "longdesc", "aria-describedby"], function(e, n) {
                        var i = t(q.el).attr(n) || t(q.el).attr("data-" + n);
                        i && W.setAttribute(n, i)
                    }),
                    q.get("retinaImage") && n.devicePixelRatio > 1 && (W.height = W.height / n.devicePixelRatio,
                    W.width = W.width / n.devicePixelRatio),
                    q.get("scalePhotos") && (o = function() {
                        W.height -= W.height * e,
                        W.width -= W.width * e
                    }
                    ,
                    q.mw && W.width > q.mw && (e = (W.width - q.mw) / W.width,
                    o()),
                    q.mh && W.height > q.mh && (e = (W.height - q.mh) / W.height,
                    o())),
                    q.h && (W.style.marginTop = Math.max(q.mh - W.height, 0) / 2 + "px"),
                    F[1] && (q.get("loop") || F[P + 1]) && (W.style.cursor = "pointer",
                    W.onclick = function() {
                        K.next()
                    }
                    ),
                    W.style.width = W.width + "px",
                    W.style.height = W.height + "px",
                    a(W)
                }, 1)
            }),
            W.src = e) : e && _.load(e, q.get("data"), function(e, n) {
                c === lt && a("error" === n ? i(ut, "Error").html(q.get("xhrError")) : t(this).contents())
            })
    }
    var y, b, x, w, E, C, A, T, F, k, D, _, S, N, $, B, j, L, M, H, q, z, R, O, I, P, W, U, X, V, G, K, Y, Q = {
        html: !1,
        photo: !1,
        iframe: !1,
        inline: !1,
        transition: "elastic",
        speed: 300,
        fadeOut: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        opacity: .9,
        preloading: !0,
        className: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: void 0,
        closeButton: !0,
        fastIframe: !0,
        open: !1,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
        retinaImage: !1,
        retinaUrl: !1,
        retinaSuffix: "@2x.$1",
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        xhrError: "This content failed to load.",
        imgError: "This image failed to load.",
        returnFocus: !0,
        trapFocus: !0,
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1,
        rel: function() {
            return this.rel
        },
        href: function() {
            return t(this).attr("href")
        },
        title: function() {
            return this.title
        }
    }, J = "colorbox", Z = "cbox", tt = Z + "Element", et = Z + "_open", nt = Z + "_load", it = Z + "_complete", ot = Z + "_cleanup", rt = Z + "_closed", at = Z + "_purge", st = t("<a/>"), ut = "div", lt = 0, ct = {}, dt = function() {
        function t() {
            clearTimeout(a)
        }
        function e() {
            (q.get("loop") || F[P + 1]) && (t(),
            a = setTimeout(K.next, q.get("slideshowSpeed")))
        }
        function n() {
            B.html(q.get("slideshowStop")).unbind(u).one(u, i),
            st.bind(it, e).bind(nt, t),
            b.removeClass(s + "off").addClass(s + "on")
        }
        function i() {
            t(),
            st.unbind(it, e).unbind(nt, t),
            B.html(q.get("slideshowStart")).unbind(u).one(u, function() {
                K.next(),
                n()
            }),
            b.removeClass(s + "on").addClass(s + "off")
        }
        function o() {
            r = !1,
            B.hide(),
            t(),
            st.unbind(it, e).unbind(nt, t),
            b.removeClass(s + "off " + s + "on")
        }
        var r, a, s = Z + "Slideshow_", u = "click." + Z;
        return function() {
            r ? q.get("slideshow") || (st.unbind(ot, o),
            o()) : q.get("slideshow") && F[1] && (r = !0,
            st.one(ot, o),
            q.get("slideshowAuto") ? n() : i(),
            B.show())
        }
    }();
    t[J] || (t(g),
    K = t.fn[J] = t[J] = function(e, n) {
        var i, o = this;
        if (e = e || {},
        t.isFunction(o))
            o = t("<a/>"),
            e.open = !0;
        else if (!o[0])
            return o;
        return o[0] ? (g(),
        v() && (n && (e.onComplete = n),
        o.each(function() {
            var n = t.data(this, J) || {};
            t.data(this, J, t.extend(n, e))
        }).addClass(tt),
        i = new r(o[0],e),
        i.get("open") && h(o[0])),
        o) : o
    }
    ,
    K.position = function(e, n) {
        function i() {
            E[0].style.width = T[0].style.width = w[0].style.width = parseInt(b[0].style.width, 10) - R + "px",
            w[0].style.height = C[0].style.height = A[0].style.height = parseInt(b[0].style.height, 10) - z + "px"
        }
        var r, a, u, l = 0, c = 0, d = b.offset();
        if (k.unbind("resize." + Z),
        b.css({
            top: -9e4,
            left: -9e4
        }),
        a = k.scrollTop(),
        u = k.scrollLeft(),
        q.get("fixed") ? (d.top -= a,
        d.left -= u,
        b.css({
            position: "fixed"
        })) : (l = a,
        c = u,
        b.css({
            position: "absolute"
        })),
        c += !1 !== q.get("right") ? Math.max(k.width() - q.w - I - R - s(q.get("right"), "x"), 0) : !1 !== q.get("left") ? s(q.get("left"), "x") : Math.round(Math.max(k.width() - q.w - I - R, 0) / 2),
        l += !1 !== q.get("bottom") ? Math.max(o() - q.h - O - z - s(q.get("bottom"), "y"), 0) : !1 !== q.get("top") ? s(q.get("top"), "y") : Math.round(Math.max(o() - q.h - O - z, 0) / 2),
        b.css({
            top: d.top,
            left: d.left,
            visibility: "visible"
        }),
        x[0].style.width = x[0].style.height = "9999px",
        r = {
            width: q.w + I + R,
            height: q.h + O + z,
            top: l,
            left: c
        },
        e) {
            var f = 0;
            t.each(r, function(t) {
                return r[t] !== ct[t] ? void (f = e) : void 0
            }),
            e = f
        }
        ct = r,
        e || b.css(r),
        b.dequeue().animate(r, {
            duration: e || 0,
            complete: function() {
                i(),
                X = !1,
                x[0].style.width = q.w + I + R + "px",
                x[0].style.height = q.h + O + z + "px",
                q.get("reposition") && setTimeout(function() {
                    k.bind("resize." + Z, K.position)
                }, 1),
                t.isFunction(n) && n()
            },
            step: i
        })
    }
    ,
    K.resize = function(t) {
        var e;
        U && (t = t || {},
        t.width && (q.w = s(t.width, "x") - I - R),
        t.innerWidth && (q.w = s(t.innerWidth, "x")),
        D.css({
            width: q.w
        }),
        t.height && (q.h = s(t.height, "y") - O - z),
        t.innerHeight && (q.h = s(t.innerHeight, "y")),
        t.innerHeight || t.height || (e = D.scrollTop(),
        D.css({
            height: "auto"
        }),
        q.h = D.height()),
        D.css({
            height: q.h
        }),
        e && D.scrollTop(e),
        K.position("none" === q.get("transition") ? 0 : q.get("speed")))
    }
    ,
    K.prep = function(n) {
        if (U) {
            var o, s = "none" === q.get("transition") ? 0 : q.get("speed");
            D.remove(),
            D = i(ut, "LoadedContent").append(n),
            D.hide().appendTo(_.show()).css({
                width: function() {
                    return q.w = q.w || D.width(),
                    q.w = q.mw && q.mw < q.w ? q.mw : q.w,
                    q.w
                }(),
                overflow: q.get("scrolling") ? "auto" : "hidden"
            }).css({
                height: function() {
                    return q.h = q.h || D.height(),
                    q.h = q.mh && q.mh < q.h ? q.mh : q.h,
                    q.h
                }()
            }).prependTo(w),
            _.hide(),
            t(W).css({
                float: "none"
            }),
            d(q.get("className")),
            o = function() {
                function n() {
                    !1 === t.support.opacity && b[0].style.removeAttribute("filter")
                }
                var i, o, c = F.length;
                U && (o = function() {
                    clearTimeout(G),
                    S.hide(),
                    p(it),
                    q.get("onComplete")
                }
                ,
                N.html(q.get("title")).show(),
                D.show(),
                c > 1 ? ("string" == typeof q.get("current") && $.html(q.get("current").replace("{current}", P + 1).replace("{total}", c)).show(),
                j[q.get("loop") || c - 1 > P ? "show" : "hide"]().html(q.get("next")),
                L[q.get("loop") || P ? "show" : "hide"]().html(q.get("previous")),
                dt(),
                q.get("preloading") && t.each([a(-1), a(1)], function() {
                    var n, i = F[this], o = new r(i,t.data(i, J)), a = o.get("href");
                    a && u(o, a) && (a = l(o, a),
                    n = e.createElement("img"),
                    n.src = a)
                })) : H.hide(),
                q.get("iframe") ? (i = e.createElement("iframe"),
                "frameBorder"in i && (i.frameBorder = 0),
                "allowTransparency"in i && (i.allowTransparency = "true"),
                q.get("scrolling") || (i.scrolling = "no"),
                t(i).attr({
                    src: q.get("href"),
                    name: (new Date).getTime(),
                    class: Z + "Iframe",
                    allowFullScreen: !0
                }).one("load", o).appendTo(D),
                st.one(at, function() {
                    i.src = "//about:blank"
                }),
                q.get("fastIframe") && t(i).trigger("load")) : o(),
                "fade" === q.get("transition") ? b.fadeTo(s, 1, n) : n())
            }
            ,
            "fade" === q.get("transition") ? b.fadeTo(s, 0, function() {
                K.position(0, o)
            }) : K.position(s, o)
        }
    }
    ,
    K.next = function() {
        !X && F[1] && (q.get("loop") || F[P + 1]) && (P = a(1),
        h(F[P]))
    }
    ,
    K.prev = function() {
        !X && F[1] && (q.get("loop") || P) && (P = a(-1),
        h(F[P]))
    }
    ,
    K.close = function() {
        U && !V && (V = !0,
        U = !1,
        p(ot),
        q.get("onCleanup"),
        k.unbind("." + Z),
        y.fadeTo(q.get("fadeOut") || 0, 0),
        b.stop().fadeTo(q.get("fadeOut") || 0, 0, function() {
            b.hide(),
            y.hide(),
            p(at),
            D.remove(),
            setTimeout(function() {
                V = !1,
                p(rt),
                q.get("onClosed")
            }, 1)
        }))
    }
    ,
    K.remove = function() {
        b && (b.stop(),
        t[J].close(),
        b.stop(!1, !0).remove(),
        y.remove(),
        V = !1,
        b = null,
        t("." + tt).removeData(J).removeClass(tt),
        t(e).unbind("click." + Z).unbind("keydown." + Z))
    }
    ,
    K.element = function() {
        return t(q.el)
    }
    ,
    K.settings = Q)
}(jQuery, document, window),
function(t, e, n, i) {
    "use strict";
    t.quicksearch = {
        defaults: {
            delay: 100,
            selector: null,
            stripeRows: null,
            loader: null,
            noResults: "",
            matchedResultsCount: 0,
            bind: "keyup search input",
            removeDiacritics: !1,
            minValLength: 0,
            onBefore: t.noop,
            onAfter: t.noop,
            onValTooSmall: t.noop,
            show: function() {
                t(this).show()
            },
            hide: function() {
                t(this).hide()
            },
            prepareQuery: function(t) {
                return t.toLowerCase().split(" ")
            },
            testQuery: function(t, e, n) {
                for (var i = 0; i < t.length; i += 1)
                    if (-1 === e.indexOf(t[i]))
                        return !1;
                return !0
            }
        },
        diacriticsRemovalMap: [{
            base: "A",
            letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
        }, {
            base: "AA",
            letters: /[\uA732]/g
        }, {
            base: "AE",
            letters: /[\u00C6\u01FC\u01E2]/g
        }, {
            base: "AO",
            letters: /[\uA734]/g
        }, {
            base: "AU",
            letters: /[\uA736]/g
        }, {
            base: "AV",
            letters: /[\uA738\uA73A]/g
        }, {
            base: "AY",
            letters: /[\uA73C]/g
        }, {
            base: "B",
            letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
        }, {
            base: "C",
            letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
        }, {
            base: "D",
            letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
        }, {
            base: "DZ",
            letters: /[\u01F1\u01C4]/g
        }, {
            base: "Dz",
            letters: /[\u01F2\u01C5]/g
        }, {
            base: "E",
            letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
        }, {
            base: "F",
            letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
        }, {
            base: "G",
            letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
        }, {
            base: "H",
            letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
        }, {
            base: "I",
            letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
        }, {
            base: "J",
            letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
        }, {
            base: "K",
            letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
        }, {
            base: "L",
            letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
        }, {
            base: "LJ",
            letters: /[\u01C7]/g
        }, {
            base: "Lj",
            letters: /[\u01C8]/g
        }, {
            base: "M",
            letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
        }, {
            base: "N",
            letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
        }, {
            base: "NJ",
            letters: /[\u01CA]/g
        }, {
            base: "Nj",
            letters: /[\u01CB]/g
        }, {
            base: "O",
            letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
        }, {
            base: "OI",
            letters: /[\u01A2]/g
        }, {
            base: "OO",
            letters: /[\uA74E]/g
        }, {
            base: "OU",
            letters: /[\u0222]/g
        }, {
            base: "P",
            letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
        }, {
            base: "Q",
            letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
        }, {
            base: "R",
            letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
        }, {
            base: "S",
            letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
        }, {
            base: "T",
            letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
        }, {
            base: "TZ",
            letters: /[\uA728]/g
        }, {
            base: "U",
            letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
        }, {
            base: "V",
            letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
        }, {
            base: "VY",
            letters: /[\uA760]/g
        }, {
            base: "W",
            letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
        }, {
            base: "X",
            letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
        }, {
            base: "Y",
            letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
        }, {
            base: "Z",
            letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
        }, {
            base: "a",
            letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
        }, {
            base: "aa",
            letters: /[\uA733]/g
        }, {
            base: "ae",
            letters: /[\u00E6\u01FD\u01E3]/g
        }, {
            base: "ao",
            letters: /[\uA735]/g
        }, {
            base: "au",
            letters: /[\uA737]/g
        }, {
            base: "av",
            letters: /[\uA739\uA73B]/g
        }, {
            base: "ay",
            letters: /[\uA73D]/g
        }, {
            base: "b",
            letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
        }, {
            base: "c",
            letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
        }, {
            base: "d",
            letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
        }, {
            base: "dz",
            letters: /[\u01F3\u01C6]/g
        }, {
            base: "e",
            letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
        }, {
            base: "f",
            letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
        }, {
            base: "g",
            letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
        }, {
            base: "h",
            letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
        }, {
            base: "hv",
            letters: /[\u0195]/g
        }, {
            base: "i",
            letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
        }, {
            base: "j",
            letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
        }, {
            base: "k",
            letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
        }, {
            base: "l",
            letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
        }, {
            base: "lj",
            letters: /[\u01C9]/g
        }, {
            base: "m",
            letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
        }, {
            base: "n",
            letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
        }, {
            base: "nj",
            letters: /[\u01CC]/g
        }, {
            base: "o",
            letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
        }, {
            base: "oi",
            letters: /[\u01A3]/g
        }, {
            base: "ou",
            letters: /[\u0223]/g
        }, {
            base: "oo",
            letters: /[\uA74F]/g
        }, {
            base: "p",
            letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
        }, {
            base: "q",
            letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
        }, {
            base: "r",
            letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
        }, {
            base: "s",
            letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
        }, {
            base: "t",
            letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
        }, {
            base: "tz",
            letters: /[\uA729]/g
        }, {
            base: "u",
            letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
        }, {
            base: "v",
            letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
        }, {
            base: "vy",
            letters: /[\uA761]/g
        }, {
            base: "w",
            letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
        }, {
            base: "x",
            letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
        }, {
            base: "y",
            letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
        }, {
            base: "z",
            letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
        }]
    },
    t.fn.quicksearch = function(n, i) {
        this.removeDiacritics = function(e) {
            for (var n = t.quicksearch.diacriticsRemovalMap, i = 0; i < n.length; i++)
                e = e.replace(n[i].letters, n[i].base);
            return e
        }
        ;
        var o, r, a, s, u = "", l = "", c = this, d = t.extend({}, t.quicksearch.defaults, i);
        return d.noResults = d.noResults ? t(d.noResults) : t(),
        d.loader = d.loader ? t(d.loader) : t(),
        this.go = function() {
            var t, e = 0, n = 0, i = 0, o = !0, s = 0 === u.replace(" ", "").length;
            for (d.removeDiacritics && (u = c.removeDiacritics(u)),
            t = d.prepareQuery(u),
            e = 0,
            n = a.length; e < n; e++)
                t.length > 0 && t[0].length < d.minValLength ? (d.show.apply(a[e]),
                o = !1,
                i++) : s || d.testQuery(t, r[e], a[e]) ? (d.show.apply(a[e]),
                o = !1,
                i++) : d.hide.apply(a[e]);
            return o ? this.results(!1) : (this.results(!0),
            this.stripe()),
            this.matchedResultsCount = i,
            this.loader(!1),
            d.onAfter.call(this),
            l = u,
            this
        }
        ,
        this.search = function(t) {
            u = t,
            c.trigger()
        }
        ,
        this.reset = function() {
            u = "",
            this.loader(!0),
            d.onBefore.call(this),
            e.clearTimeout(o),
            o = e.setTimeout(function() {
                c.go()
            }, d.delay)
        }
        ,
        this.currentMatchedResults = function() {
            return this.matchedResultsCount
        }
        ,
        this.stripe = function() {
            if ("object" == typeof d.stripeRows && null !== d.stripeRows) {
                var e = d.stripeRows.join(" ")
                  , n = d.stripeRows.length;
                s.not(":hidden").each(function(i) {
                    t(this).removeClass(e).addClass(d.stripeRows[i % n])
                })
            }
            return this
        }
        ,
        this.strip_html = function(e) {
            var n = e.replace(new RegExp("<[^<]+\\>","g"), " ");
            return n = t.trim(n.toLowerCase())
        }
        ,
        this.results = function(t) {
            return d.noResults.length && d.noResults[t ? "hide" : "show"](),
            this
        }
        ,
        this.loader = function(t) {
            return d.loader.length && d.loader[t ? "show" : "hide"](),
            this
        }
        ,
        this.cache = function(e) {
            e = void 0 === e || e,
            s = t(n).not(d.noResults);
            var i = "string" == typeof d.selector ? s.find(d.selector) : s;
            return r = i.map(function() {
                var t = c.strip_html(this.innerHTML);
                return d.removeDiacritics ? c.removeDiacritics(t) : t
            }),
            a = s.map(function() {
                return this
            }),
            u = u || this.val() || "",
            e && this.go(),
            this
        }
        ,
        this.trigger = function() {
            return u.length < d.minValLength && u.length > l.length || u.length < d.minValLength - 1 && u.length < l.length ? (d.onValTooSmall.call(this, u),
            c.go()) : (this.loader(!0),
            d.onBefore.call(this),
            e.clearTimeout(o),
            o = e.setTimeout(function() {
                c.go()
            }, d.delay)),
            this
        }
        ,
        this.cache(),
        this.results(!0),
        this.stripe(),
        this.loader(!1),
        this.each(function() {
            t(this).on(d.bind, function() {
                u = t(this).val(),
                c.trigger()
            }),
            t(this).on(d.resetBind, function() {
                u = "",
                c.reset()
            })
        })
    }
}(jQuery, this, document);
var Util = {
    getFileName: function() {
        var t = location.pathname.split("/");
        return t[t.length - 1]
    },
    getDirName: function() {
        var t = location.pathname.split("/");
        return t[t.length - 2]
    },
    setStorage: function(t, e) {
        window.localStorageAlias = window.localStorage,
        document.all && !window.localStorage ? (window.localStorageAlias = {},
        window.localStorageAlias.removeItem = function() {}
        ) : "undefined" != typeof Storage ? localStorage.setItem(t, e) : window.alert("Please use a modern browser to properly view this template!")
    },
    getStorage: function(t) {
        if (window.localStorageAlias = window.localStorage,
        document.all && !window.localStorage)
            window.localStorageAlias = {},
            window.localStorageAlias.removeItem = function() {}
            ;
        else {
            if ("undefined" != typeof Storage)
                return localStorage.getItem(t);
            window.alert("Please use a modern browser to properly view this template!")
        }
    },
    windowPopup: function(t, e, n, i, o) {
        var r = n
          , a = Math.ceil((window.screen.width - r) / 2);
        window.open(t, e, "width=" + n + ", height=" + i + ", menubar=no, status=no, toolbar=no, scrollbars=" + o + ", left=" + a + ", top=30")
    },
    tabHandler: function(t, e, n, i) {
        var o = n
          , r = $(t)
          , a = $(e)
          , s = r.find("li");
        s.eq(o).addClass("on"),
        a.hide(),
        a.eq(o).show(),
        s.each(function() {
            $(this).find("a").attr("role", "tab"),
            $(this).find("a").attr("title", "선택하기"),
            $(this).find("a").attr("aria-selected", "false")
        }),
        s.eq(o).find("a").attr("title", "선택됨"),
        s.eq(o).find("a").attr("aria-selected", !0),
        r.on("click", "a", function() {
            var t = $(this).parent().index();
            return s.removeClass("on").eq(t).addClass("on"),
            s.find("a").attr("title", "선택하기"),
            s.find("a").attr("aria-selected", "false"),
            s.eq(t).find("a").attr("title", "선택됨"),
            s.eq(t).find("a").attr("aria-selected", !0),
            a.hide(),
            a.eq(t).show(),
            i && i(t),
            !1
        })
    },
    scrollWatch: function(t) {
        var e, n = 0, i = 0, o = !1, r = function(t) {
            clearInterval(e),
            e = setInterval(function() {
                i == n && (clearInterval(e),
                n = 0,
                i = 0,
                t && t(),
                setTimeout(function() {
                    o = !1
                }, 1500)),
                i = n
            }, 200)
        };
        $(window).scroll(function(e) {
            n++,
            o || (o = !0,
            r(t))
        })
    },
    resizeWatch: function(t) {
        var e, n = 0, i = 0, o = !1, r = function() {
            clearInterval(e),
            e = setInterval(function() {
                i == n && (clearInterval(e),
                n = 0,
                i = 0,
                t && t(),
                setTimeout(function() {
                    return o = !1,
                    !1
                }, 600)),
                i = n
            }, 200)
        };
        $(window).resize(function(t) {
            n++,
            o || (o = !0,
            r())
        })
    }
};
$(document).ready(function() {
    (function() {
        var t = {
            root: $("html, body"),
            body: $("body"),
            header: $(".header"),
            tab_nav: $(".tab_nav"),
            tab_navList: $("li", this.tab_nav),
            info_section: $(".info_section"),
            tobe_section: $(".tobe_section"),
            content: $("#content"),
            tab_content: $(".tab_contents_wrap"),
            tab_title: $("h3")
        }
          , e = (Util.getFileName(),
        Util.getDirName())
          , n = String(window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"))
          , i = (t.tab_navList.size(),
        t.tab_navList.size() - 1)
          , o = t.tab_navList.size() - 2
          , r = "../@pub_guide/worklist.html"
          , a = "../@pub_guide/guide_sample/layerPop_worklist.html"
          , s = "../../" + e + "/"
          , u = "../../WEB-INF/" + e + "/"
          , l = 0
          , c = function() {
            var e = function(e) {
                t.tab_content.find("tbody tr").each(function(t) {
                    $("td:first-child", $(this)).before("<td class='num' align='center'>" + (t + 1) + "</td>")
                }),
                t.content.css({
                    visibility: "visible"
                }),
                e && e()
            }
              , i = function() {
                t.tab_content.find("tbody tr.layer .path a").on("click", function() {
                    var t = $(this).attr("href");
                    return t = -1 != n.search("file") ? u + t : a + "?" + s + t,
                    window.open(t),
                    !1
                })
            };
            return {
                initModule: function() {
                    e(),
                    i()
                }
            }
        }()
          , d = function() {
            var n = function() {
                function n(n) {
                    if (n == i) {
                        var a = t.tab_nav.find("li").eq(n).find("a").attr("href");
                        "javascript:void(0);" == a || "#" == a || "" == a || "#none" == a || "#nolink" == a ? location.href = r + "?" + e : window.open(a)
                    }
                    return n == o ? (t.tab_title.show(),
                    t.tab_content.show()) : t.tab_title.hide(),
                    !1
                }
                var a = o;
                Util.tabHandler(t.tab_nav.find("ul"), t.tab_content, a, n),
                n(a)
            }
              , a = function() {
                function e() {
                    n(),
                    o = setInterval(function() {
                        r || a ? $(".subNav").addClass("on") : n()
                    }, 100)
                }
                function n() {
                    $(".subNav").removeClass("on"),
                    t.tab_nav.find(".subNav li").remove(),
                    clearInterval(o)
                }
                function i() {
                    t.tab_content.find("tr").removeClass("focus")
                }
                var o, r = !1, a = !1;
                t.tab_nav.append('<div class="subNav"><ul></ul></div>'),
                t.root.on("click", function() {
                    i()
                }),
                t.tab_nav.on({
                    mouseover: function() {
                        return r = !0,
                        a = !0,
                        !1
                    },
                    mouseout: function() {
                        return r = !1,
                        a = !1,
                        !1
                    }
                }),
                t.tab_navList.each(function(n) {
                    $(this).find("a").on({
                        "mouseenter focusin": function() {
                            var o = $(this)
                              , s = o.parent();
                            return r = !0,
                            overNum = $(this).parent().index(),
                            e(),
                            t.tab_content.eq(n).find("tbody td.depth2").each(function(e) {
                                var n = $(this).text()
                                  , o = $(this).parent().parent().find("tr");
                                if ($(this).closest("tr").hasClass("del"))
                                    ;
                                else if ("" != n) {
                                    t.tab_nav.find(".subNav ul").append('<li><a href="javascript:void(0);" data-index=' + e + ">" + n + "</a></li>"),
                                    $(".subNav li a").on({
                                        "mouseenter focusin": function() {
                                            return r = !0,
                                            a = !0,
                                            s.addClass("active"),
                                            !1
                                        },
                                        "mouseleave foucsout": function() {
                                            return r = !1,
                                            a = !1,
                                            s.removeClass("active"),
                                            !1
                                        },
                                        click: function() {
                                            var e = Number($(this).data("index"))
                                              , n = o.eq(e).offset().top
                                              , r = $(window).height()
                                              , a = n - r / 2 - 120;
                                            return t.tab_nav.find("li").eq(overNum).find("a").trigger("click"),
                                            i(),
                                            o.eq(e).addClass("focus"),
                                            t.root.stop().animate({
                                                scrollTop: a
                                            }, "fast"),
                                            !1
                                        }
                                    })
                                }
                            }),
                            !1
                        },
                        "mouseleave focusout": function() {
                            return r = !1,
                            !1
                        }
                    })
                })
            }
              , s = function() {
                t.tab_content.each(function(e) {
                    var n = $(this);
                    $(this).on({
                        "mouseenter focusin": function() {
                            var e = n.index();
                            return t.tab_nav.find("li").eq(e).addClass("active").siblings().removeClass("active"),
                            !1
                        },
                        "mouseleave focusout": function() {
                            var e = n.index();
                            return t.tab_nav.find("li").eq(e).removeClass("active"),
                            !1
                        }
                    })
                })
            };
            return {
                initModule: function() {
                    n(),
                    a(),
                    s()
                }
            }
        }()
          , f = function() {
            function e() {
                t.body.addClass("headerClose"),
                s.text("Open")
            }
            function n() {
                t.body.removeClass("headerClose"),
                s.text("Close")
            }
            function i() {
                n(),
                t.info_section.stop().slideDown(200)
            }
            function o() {
                e(),
                t.info_section.stop().slideUp(100)
            }
            function r() {
                0 == u ? (e(),
                t.info_section.stop().slideUp(100)) : (n(),
                t.info_section.show())
            }
            function a() {
                t.body.hasClass("floating") ? 0 == c ? (e(),
                t.info_section.stop().slideUp(100)) : (n(),
                t.info_section.show()) : (e(),
                t.info_section.hide())
            }
            var s = Object
              , u = !0
              , c = !1
              , d = function() {
                t.info_section.find(">div h2").append(' <a href="javascript:void(0);" class="close_btn"> - </a>'),
                t.info_section.after('<div class="info_fold_btn"> <a href="javascript:void(0);"><span> Close </span></a> </div>'),
                s = $(".info_fold_btn a")
            }
              , f = function() {
                s.on("click", function() {
                    return t.body.hasClass("floating") ? t.body.hasClass("headerClose") ? (c = !0,
                    i()) : (c = !1,
                    o()) : t.body.hasClass("headerClose") ? (u = !0,
                    i(),
                    Util.setStorage("headerClose", "show")) : (u = !1,
                    o(),
                    Util.setStorage("headerClose", "hide")),
                    !1
                }),
                t.info_section.find(".close_btn").each(function(t) {
                    $(this).on("click", function() {
                        return $(this).closest("div").toggleClass("hide"),
                        $(this).closest("div").hasClass("hide") ? $(this).text(" + ") : $(this).text(" - "),
                        !1
                    })
                }),
                $(window).scroll(function() {
                    l = $(window).scrollTop(),
                    l > 1 ? (a(),
                    t.body.addClass("floating"),
                    t.content.css({
                        "margin-top": t.tab_nav.height() + 10
                    })) : (r(),
                    t.body.removeClass("floating"),
                    t.content.css({
                        "margin-top": 30
                    }))
                }).scroll()
            }
              , p = function() {
                void 0 === Util.getStorage("headerClose") || "null" == Util.getStorage("headerClose") || "show" == Util.getStorage("headerClose") ? (Util.setStorage("headerClose", "show"),
                u = !0) : (t.body.addClass("headerClose"),
                t.info_section.stop().slideUp("fast"),
                u = !1)
            };
            return {
                initModule: function() {
                    d(),
                    f(),
                    p()
                }
            }
        }()
          , p = function() {
            var e = function() {
                t.body.append('<div class="scroll_btn"><a href="javascipt:void(0);" class="btn_top"><span>↑</span></a><a href="javascipt:void(0);" class="page_up"><span>∧</span></a><a href="javascipt:void(0);" class="page_down"><span>∨</span></a><a href="javascipt:void(0);" class="btn_bottom"><span>↓</span></a></div>'),
                t.tab_title.append('<span class="top_btn"><a href="javascript:void(0);" >↑top</a></span>'),
                t.tab_title.append('<strong class="top_btn" style="z-index:9;position:absolute;bottom:10px; right:19px;display:none"><a href="javascript:void(0);">↑top</a></strong>')
            }
              , n = function() {
                var e = $(".scroll_btn")
                  , n = $(".page_up", e)
                  , i = $(".page_down", e)
                  , o = $(".btn_top", e)
                  , r = $(".btn_bottom", e)
                  , a = $(".top_btn");
                n.on("click", function() {
                    var e = $(window).height() - 80
                      , n = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                    return t.root.stop().animate({
                        scrollTop: n - e
                    }, "fast"),
                    !1
                }),
                i.on("click", function() {
                    var e = $(window).height() - 80
                      , n = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                    return t.root.stop().animate({
                        scrollTop: n + e
                    }, "fast"),
                    !1
                }),
                o.on("click", function() {
                    return t.root.stop().animate({
                        scrollTop: 0
                    }, "fast"),
                    !1
                }),
                r.on("click", function() {
                    return t.root.stop().animate({
                        scrollTop: $(document).height()
                    }, "fast"),
                    !1
                }),
                a.on("click", function() {
                    return o.trigger("click"),
                    !1
                })
            };
            return {
                initModule: function() {
                    e(),
                    n()
                }
            }
        }()
          , h = function() {
            var e = {}
              , i = {}
              , o = function() {
                t.body.append('<div class="footMenu ">\t<div class="optionBar clearfix">\t\t<div class="btn_area fl ">\t\t\t<a href="javascript:void(0);" class="btn_cbox close_btn"><span>닫기</span></a>\t\t\t<a href="javascript:void(0);" class="btn_cbox prev_btn"><span>이전</span></a>\t\t\t<a href="javascript:void(0);" class="btn_cbox next_btn"><span>다음</span></a>\t\t\t<a href="javascript:void(0);" class="btn resize_btn"><span>ReSize</span></a>\t\t\t<a href="javascrpt:void(0);" class="btn id_link" target="_blank"><span>Open</span></a>\t\t</div>\t\t<div class="btn_area fr">\t\t\t<div class="info_area">\t\t\t\t<span class="id_txt">pageID</span>\t\t\t</div>\t\t\t<select name="" id="autoSelect">\t\t\t\t<option value="0.5">0.5</option>\t\t\t\t<option value="0.8">0.8</option>\t\t\t\t<option value="1" selected="selected">1.0</option>\t\t\t\t<option value="2">2.0</option>\t\t\t\t<option value="3">3.0</option>\t\t\t</select>\t\t\t<a href="javascript:void(0);" class="btn_cbox auto_btn"><span>Auto</span></a>\t\t\t<a href="javascript:void(0);" class="btn_cbox prev_btn"><span>이전</span></a>\t\t\t<a href="javascript:void(0);" class="btn_cbox next_btn"><span>다음</span></a>\t\t\t<a href="javascript:void(0);" class="btn_cbox close_btn"><span>닫기</span></a>\t\t</div>\t</div>\t<div class="resizeBar">\t\t<div class="control">\t\t\t<span class="bar s320" data-width="320"><span class="info_txt">320</span></span>\t\t\t<span class="bar s340" data-width="340"></span>\t\t\t<span class="bar s360" data-width="360"></span>\t\t\t<span class="bar s375" data-width="375"></span>\t\t\t<span class="bar s425" data-width="425"></span>\t\t\t<span class="bar s768" data-width="768"></span>\t\t\t<span class="bar s1000" data-width="1000"></span>\t\t\t<span class="bar s1024" data-width="1024"></span>\t\t\t<span class="bar s1440" data-width="1440"></span>\t\t\t<span class="bar s1600" data-width="1600"></span>\t\t\t<span class="bar s1920" data-width="1920"></span>\t\t</div>\t\t<div class="control">\t\t</div>\t</div></div>')
            }
              , r = function() {
                e = {
                    footMenu: $(".footMenu"),
                    autoSelect: $("#autoSelect"),
                    resizeBtn: $(".resize_btn", this.footMenu),
                    resizeBar: $(".resizeBar", this.footMenu),
                    control: $(".control", this.footMenu),
                    control_btn: $(".bar", this.footMenu),
                    infoTxt: $(".info_txt", this.footMenu)
                },
                i = {
                    className: "iframe",
                    bottomGap: 40,
                    bottomGap_resize: 59,
                    outerGap: 28,
                    curSize: Util.getStorage("curSize"),
                    resizeMode: Util.getStorage("resizeMode"),
                    ARresize: [],
                    option: {
                        width: "100%",
                        height: $(window).height() - 40,
                        top: 0
                    },
                    autoID: "autoID",
                    autoFlag: !1,
                    saveResizeBtn: Object
                },
                e.control_btn.each(function(t) {
                    var e = $(this).data("width");
                    i.ARresize[t] = e
                })
            }
              , l = function() {
                function n() {
                    $("." + i.className).colorbox({
                        width: i.option.width,
                        height: i.option.height,
                        top: i.option.top,
                        opacity: 1,
                        current: ""
                    }),
                    $.colorbox.resize(i.option)
                }
                function o() {
                    t.body.css({
                        overflow: "hidden"
                    }),
                    e.footMenu.addClass("on"),
                    a()
                }
                function r() {
                    t.body.css({
                        overflow: "auto"
                    }),
                    e.footMenu.removeClass("on")
                }
                function a() {
                    var t = $.colorbox.element();
                    e.footMenu.find(".id_txt").text(t.context.title)
                }
                function s() {
                    i.autoFlag && e.footMenu.find(".auto_btn").trigger("click")
                }
                function u() {
                    i.resizeMode = "Resize",
                    Util.setStorage("resizeMode", "Resize"),
                    $(".s" + c).trigger("click"),
                    e.resizeBar.addClass("on"),
                    e.resizeBtn.find("span").text("Fullsize")
                }
                function l() {
                    i.resizeMode = "Fullsize",
                    Util.setStorage("resizeMode", "Fullsize"),
                    i.option = {
                        width: "100%",
                        height: $(window).height() - i.bottomGap,
                        top: 0
                    },
                    e.resizeBar.removeClass("on"),
                    e.resizeBtn.find("span").text("Resize")
                }
                var c = i.curSize;
                $("." + i.className).colorbox({
                    iframe: !0,
                    width: i.option.width,
                    height: i.option.height,
                    top: i.option.top,
                    opacity: 1,
                    current: "",
                    onOpen: function() {
                        return o(),
                        !1
                    },
                    onLoad: function() {
                        return !1
                    },
                    onComplete: function() {
                        return "Resize" == Util.getStorage("resizeMode") && (i.autoFlag || u()),
                        !1
                    },
                    onCleanup: function() {
                        return !1
                    },
                    onClosed: function() {
                        return r(),
                        !1
                    }
                }),
                e.footMenu.find(".id_link").on("click", function() {
                    var t = $.colorbox.element();
                    return window.open(t.context.href),
                    s(),
                    !1
                }),
                e.footMenu.find(".prev_btn").on("click", function() {
                    return $.colorbox.prev(),
                    s(),
                    a(),
                    !1
                }),
                e.footMenu.find(".next_btn").on("click", function() {
                    return $.colorbox.next(),
                    s(),
                    a(),
                    !1
                }),
                e.footMenu.find(".close_btn").on("click", function() {
                    return $.colorbox.close(),
                    s(),
                    !1
                }),
                e.footMenu.find(".auto_btn").on("click", function() {
                    if (i.autoFlag)
                        clearInterval(i.autoID),
                        $(this).removeClass("on"),
                        i.autoFlag = !1;
                    else {
                        var t = e.autoSelect.val();
                        i.autoID = setInterval(function() {
                            $.colorbox.next(),
                            a()
                        }, 1e3 * t),
                        $(this).addClass("on"),
                        i.autoFlag = !0
                    }
                    return !1
                }),
                e.autoSelect.on("change", function() {
                    s()
                }),
                e.resizeBtn.on({
                    click: function() {
                        return "Fullsize" == i.resizeMode ? u() : l(),
                        n(),
                        s(),
                        !1
                    }
                }),
                e.control_btn.each(function() {
                    $(this).on({
                        mouseenter: function() {
                            var t = $(this).data("width");
                            return e.infoTxt.text(t),
                            e.control_btn.removeClass("on"),
                            $(this).addClass("on").prevAll().addClass("on"),
                            !1
                        },
                        mouseleave: function() {
                            return e.infoTxt.text(c),
                            e.control_btn.removeClass("on"),
                            i.saveResizeBtn.addClass("on").prevAll().addClass("on"),
                            !1
                        },
                        click: function() {
                            i.resizeMode = "Resize",
                            Util.setStorage("resizeMode", "Resize");
                            var t = $(this).data("width");
                            return c = t,
                            Util.setStorage("curSize", c),
                            i.saveResizeBtn = $(this),
                            e.infoTxt.text(c),
                            $(this).addClass("on").prevAll().addClass("on"),
                            i.option = {
                                width: t + i.outerGap,
                                height: $(window).height() - Number(i.bottomGap_resize),
                                top: 0
                            },
                            n(),
                            s(),
                            !1
                        }
                    })
                }),
                $(window).on("resize", function() {
                    "Fullsize" == i.resizeMode && (i.option = {
                        width: $(this).width(),
                        height: $(this).height() - i.bottomGap,
                        top: 0
                    },
                    n())
                })
            }
              , c = function() {
                t.tab_content.find("tr").each(function(t) {
                    var e = $(this).find(".num a")
                      , o = $(this).find(".pid").text()
                      , r = $(this).find(".path a").attr("href");
                    $(this).hasClass("del") || !$(this).find(".rdate").text() || void 0 === r || "none" == $(this).context.style.display ? e.removeClass("iframe cboxElement") : ($(this).hasClass("layer") ? r = -1 != n.search("file") ? u + r : a + "?" + s + r : $(this).hasClass("popup") && (r = $(this).find(".path a").text()),
                    $(this).find("td.num").html("<a href=" + r + " rel='" + i.className + "' class='" + i.className + "' title='" + o + "'>" + $(this).find("td.num").text() + "</a>"))
                }),
                t.tab_content.find("table tr td a").on({
                    focusin: function() {
                        return $(this).closest("tr").addClass("focus"),
                        !1
                    },
                    focusout: function() {
                        return $(this).closest("tr").removeClass("focus"),
                        !1
                    }
                })
            }
              , d = function() {
                void 0 !== Util.getStorage("curSize") && null != Util.getStorage("curSize") || (Util.setStorage("curSize", 320),
                i.curSize = 320),
                void 0 === Util.getStorage("resizeMode") && (Util.setStorage("resizeMode", "Fullsize"),
                i.resizeMode = "Fullsize"),
                "Resize" == Util.getStorage("resizeMode") && (i.option = {
                    width: i.curSize + i.outerGap,
                    height: $(window).height() - Number(i.bottomGap_resize),
                    top: 0
                },
                i.saveResizeBtn = $("." + i.curSize))
            }
              , f = function() {
                o(),
                r(),
                c(),
                l()
            };
            return {
                initModule: function() {
                    f(),
                    d()
                },
                resetModule: function() {
                    $(".footMenu").remove(),
                    f()
                },
                localStorage: d
            }
        }()
          , g = function() {
            function e(t) {
                s = t.attr("class").split(" ")[0],
                A = 1,
                t.addClass("on"),
                t.siblings().removeClass("on"),
                u.find("tr").show()
            }
            function n(t) {
                l.each(function(t) {
                    $("td:first-child", $(this)).text(t + 1)
                })
            }
            function i(t, n) {
                e(t),
                l.each(function(t) {
                    n ? (C && $(this).hasClass(s) && $("td:first-child", $(this)).text(A++),
                    u.find("tr").hide(),
                    u.find("tr." + s).show()) : $(this).hasClass(s) || $("td:first-child", $(this)).text(A++)
                })
            }
            function o(t, n) {
                e(t),
                l.hide(),
                l.find("td.rdate").each(function(t) {
                    var e = String($(this).text());
                    n ? !e || $(this).parent().hasClass("del") || ($(this).parent().show(),
                    $("td:first-child", $(this).parent()).text(A++)) : e || $(this).parent().hasClass("del") || ($(this).parent().show(),
                    $("td:first-child", $(this).parent()).text(A++))
                })
            }
            function r() {
                var t, e = 0, n = 0, i = 0, o = 0, r = 0, a = 0, s = 0, u = 0, h = 0, E = 0;
                l.each(function(t) {
                    $(this).hasClass("new") && e++,
                    $(this).hasClass("del") && n++,
                    $(this).hasClass("hold") && i++,
                    $(this).hasClass("rework") && o++,
                    $(this).hasClass("equal") && r++,
                    $(this).hasClass("layer") && a++,
                    $(this).hasClass("popup") && s++,
                    E = t + 1
                }),
                l.find("td.rdate").each(function(t) {
                    var e = String($(this).text());
                    !e || $(this).parent().hasClass("del") || u++,
                    e || $(this).parent().hasClass("del") || h++
                }),
                c.find("span").text("신규 : " + e),
                d.find("span").text("삭제 : " + n),
                f.find("span").text("보류 : " + i),
                p.find("span").text("재확인 : " + o),
                g.find("span").text("동일 : " + r),
                v.find("span").text("레이어 : " + a),
                m.find("span").text("팝업 : " + s),
                y.find("span").text("완료 : " + u),
                b.find("span").text("미완 : " + h),
                x.find("span").text("전체 : " + E),
                w.find("span").text("전체 - 삭제 : " + (E - n));
                var t = Math.round(100 * (1 - h / (E - n)));
                $(".total_rate span").text("완료율 : " + t + " % ")
            }
            function a() {
                c.on("click", function() {
                    return i($(this), !0),
                    h.resetModule(),
                    !1
                }),
                d.on("click", function() {
                    return i($(this), !0),
                    h.resetModule(),
                    !1
                }),
                f.on("click", function() {
                    return i($(this), !0),
                    h.resetModule(),
                    !1
                }),
                p.on("click", function() {
                    return i($(this), !0),
                    h.resetModule(),
                    !1
                }),
                g.on("click", function() {
                    return i($(this), !0),
                    h.resetModule(),
                    !1
                }),
                v.on("click", function() {
                    return i($(this), !0),
                    h.resetModule(),
                    !1
                }),
                m.on("click", function() {
                    return i($(this), !0),
                    h.resetModule(),
                    !1
                }),
                y.on("click", function() {
                    return o($(this), !0),
                    h.resetModule(),
                    !1
                }),
                b.on("click", function() {
                    return o($(this), !1),
                    h.resetModule(),
                    !1
                }),
                x.on("click", function() {
                    return e($(this)),
                    n($(this)),
                    h.resetModule(),
                    !1
                }),
                w.on("click", function() {
                    return e($(this)),
                    C ? l.each(function(t) {
                        $(this).hasClass("del") ? $(this).hide() : $("td:first-child", $(this)).text(A++)
                    }) : (n($(this)),
                    u.find("tr.del").hide()),
                    h.resetModule(),
                    !1
                })
            }
            var s, u = t.tab_content.find("tbody"), l = u.find("tr"), c = t.info_section.find("a.new"), d = t.info_section.find("a.del"), f = t.info_section.find("a.hold"), p = t.info_section.find("a.rework"), g = t.info_section.find("a.equal"), v = t.info_section.find("a.layer"), m = t.info_section.find("a.popup"), y = t.info_section.find("a.result"), b = t.info_section.find("a.result_ex"), x = t.info_section.find("a.total"), w = t.info_section.find("a.real"), E = $("input#id_search"), C = !1, A = 1;
            E.quicksearch(".tab_contents_wrap tbody tr");
            return {
                initModule: function() {
                    r(),
                    a(),
                    w.trigger("click")
                }
            }
        }();
        return {
            initModule: function() {
                c.initModule(),
                d.initModule(),
                f.initModule(),
                p.initModule(),
                g.initModule()
            }
        }
    }
    )().initModule()
});
