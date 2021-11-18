import React, { useContext, useEffect, useState } from "react";
import MiniCart from "./MiniCart";
import cartContext from "../../store/cart-context";
import "./Header.scss";

export default function Header(props) {
	const [showCart, setShowCart] = useState(false);
	const [btnHighlighted, setBtnHighlighted] = useState(false);
	const { items } = useContext(cartContext);

	const itemCount = items.reduce((count, next) => {
		return (count = count + next.amount);
	}, 0);

	console.log(itemCount);

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnHighlighted(true);

		const cleanup = setTimeout(() => {
			setBtnHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(cleanup);
		};
	}, [items]);

	return (
		<header className="header">
			<div className="container">
				<div className="row align-items-center">
					<div className="logo">Foodle</div>

					<div className="header-cart">
						<div
							className={`cartBtn${btnHighlighted ? " bump" : ""}`}
							onClick={() => setShowCart(!showCart)}
						>
							<span className="cart-icon">
								<svg version="1.1" width="18" height="18" x="0" y="0" viewBox="0 0 450.391 450.391">
									<g>
										<path
											d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02     c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465     c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122     C169.796,411.77,158.1,423.465,143.673,423.465z"
											fill="var(--dark-color)"
										></path>
										<path
											d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02     C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122     c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z"
											fill="var(--dark-color)"
										></path>
										<path
											d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42     C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004     c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453     c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449     H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988     c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228     c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z"
											fill="var(--dark-color)"
										></path>
									</g>
								</svg>
							</span>
							<span className="text">Cart</span>
							<span className="badge">{itemCount}</span>
						</div>

						{showCart && <MiniCart />}
					</div>
				</div>
			</div>
		</header>
	);
}
