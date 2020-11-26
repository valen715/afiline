import React from 'react';

const Contable = ({
	setterNombre,
	setterValor,
	setterFecha,
	contable,
	type,
	disabled
}) => {
	return (
		<div>
			<div className="input-group mb-1 ">
				<input
					value={contable.nombre}
					onChange={(e) => {if (!disabled)setterNombre(e.target.value)}}
					type="text"
					className="form-control"
					placeholder={`Nombre del ${type}`}
				/>
			</div>
			<div className="entrada2 mt-1">
				<div className="input-group mb-1">
					<input
						value={
							contable.valor === 0 ? undefined : contable.valor
						}
						onChange={(e) => {if (!disabled)setterValor(parseInt(e.target.value))}}
						type="number"
						lang="en"
						step="0.01"
						className="form-control"
						placeholder={`Digite ${type}`}
					/>
				</div>
				<div className="entrada2 mt-1">
					<div className="input-group mb-3">
						<input
							value={contable.fecha}
							onChange={(e) => {if (!disabled)setterFecha(e.target.value)}}
							type="date"
							className="form-control"
							placeholder={`Fecha en que recibió el ${type}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contable;
